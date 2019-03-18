import React from "react"
import { Link } from "gatsby"
import "antd/dist/antd.css"
import { Row, Col, Card, Form, Select, Switch, Button, Divider } from "antd"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import styles from "./index.css"

const stopStreamTracks = stream => {
  if (!stream || !stream.getTracks) {
    return
  }
  try {
    const tracks = stream.getTracks()
    tracks.forEach(it => {
      try {
        it.stop()
      } catch (errMsg) {
        // debugger;
      }
    })
  } catch (errMsg) {
    // debugger;
  }
}

const getDisplayMedia = async constraints => {
  try {
    const stream = await global.navigator.mediaDevices.getDisplayMedia({
      video: constraints,
    })
    return stream
  } catch (errMsg) {
    return null
  }
}

const GetDisplayMedia = ({ form }) => {
  const videoRef = React.useRef(null)
  const [loading, setLoading] = React.useState(false)
  const [constraints, setConstraints] = React.useState(null)
  const [stream, setStream] = React.useState(null)
  const [videoInfo, setVideoInfo] = React.useState(null)

  React.useEffect(() => {
    const onSubmit = async () => {
      if (loading) {
        return
      }
      setLoading(true)
      stopStreamTracks(stream)
      setStream(null)
      if (!constraints) {
        setLoading(false)
        return;
      }
      const mediaStream = await getDisplayMedia(constraints)
      // if (!loading) {
      //   return
      // }
      setStream(mediaStream)
      setLoading(false)
    }
    onSubmit()
    return () => {
      // setLoading(false)
    }
  }, [constraints])

  React.useEffect(() => {
    setVideoInfo(null)
    if (stream && videoRef && videoRef.current) {
      videoRef.current.srcObject = stream
    }
    return () => {
      // stopStreamTracks(stream)
      // setStream(null)
    }
  }, [stream])

  const onTimeUpdate = e => {
    const current = {
      frameCount: e.target.webkitDecodedFrameCount,
      currentTime: e.target.currentTime,
    }
    const info = {
      width: e.target.videoWidth,
      height: e.target.videoHeight,
    }

    if (!videoInfo) {
      info.current = current
      info.last = current
    } else {
      if (1 < current.currentTime - videoInfo.current.currentTime) {
        info.current = current
        info.last = videoInfo.current
      } else {
        info.current = videoInfo.current
        info.last = videoInfo.last
      }
    }
    setVideoInfo(info)
  }

  return (
    <Layout>
      <SEO title="getDisplayMedia" keywords={[`getDisplayMedia`]} />
      <h1>getDisplayMedia</h1>
      <p>
        <a href="https://w3c.github.io/mediacapture-screen-share.">参考文档</a>
      </p>
      {/* <p>Now go build something great.</p> */}
      <Card title="参数" style={{ marginBottom: 16 }}>
        <Form
          onSubmit={e => {
            e.preventDefault()
            form.validateFieldsAndScroll(
              (errors, { resolution, ...values }) => {
                if (errors) {
                  return
                }
                const [width, height] = resolution.split("x")
                setConstraints({ ...values, width, height })
              }
            )
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                required
                label="分辨率"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {form.getFieldDecorator("resolution", {
                  initialValue: "1920x1080",
                })(
                  <Select>
                    {["1920x1080", "1280x720", "960x540"].map(it => (
                      <Select.Option value={it} key={it}>
                        {it}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                required
                label="frameRate"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {form.getFieldDecorator("frameRate", {
                  initialValue: 25,
                })(
                  <Select>
                    {[25, 20, 15].map(it => (
                      <Select.Option value={it} key={it}>
                        {it}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                required
                label="aspectRatio"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {form.getFieldDecorator("aspectRatio", {
                  initialValue: 1.7777777777,
                })(
                  <Select>
                    {[1.7777777777, 1.3333333333, 0.5625].map(it => (
                      <Select.Option value={it} key={it}>
                        {it}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                required
                label="resizeMode"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {form.getFieldDecorator("resizeMode", {
                  initialValue: "none",
                })(
                  <Select>
                    {["none", "crop-and-scale"].map(it => (
                      <Select.Option value={it} key={it}>
                        {it}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                required
                label="displaySurface"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {form.getFieldDecorator("displaySurface", {
                  initialValue: "monitor",
                })(
                  <Select>
                    {["monitor", "window", "application", "browser"].map(it => (
                      <Select.Option value={it} key={it}>
                        {it}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                required
                label="logicalSurface"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {form.getFieldDecorator("logicalSurface", {
                  initialValue: false,
                  valuePropName: "checked",
                })(<Switch />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                required
                label="cursor"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                {form.getFieldDecorator("cursor", {
                  initialValue: "never",
                })(
                  <Select>
                    {["never", "always", "motion"].map(it => (
                      <Select.Option value={it} key={it}>
                        {it}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
                <Button type="primary" htmlType="submit" loading={loading}>
                  开始
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="default" disabled={loading || !stream} onClick={() => setConstraints(null)}>
                  停止
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card title="视频">
        {videoInfo && (
          <div>
            分辨率：{videoInfo.width}x{videoInfo.height}，
            {videoInfo.current.currentTime > videoInfo.last.currentTime && (
              <span>
                &nbsp;&nbsp;实时帧率：
                {(
                  (videoInfo.current.frameCount - videoInfo.last.frameCount) /
                  (videoInfo.current.currentTime - videoInfo.last.currentTime)
                ).toFixed(2)}
                ，
              </span>
            )}
            {videoInfo.current.currentTime && (
              <span>
                &nbsp;&nbsp;平均帧率：
                {(
                  videoInfo.current.frameCount / videoInfo.current.currentTime
                ).toFixed(2)}
              </span>
            )}
            <Divider />
          </div>
        )}
        {stream && (
          <video
            ref={videoRef}
            autoPlay
            controls
            className="video"
            onTimeUpdate={onTimeUpdate}
          />
        )}
      </Card>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

// class GetDisplayMedia extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       stream: null,
//     }
//   }

//   render() {
//     return (
//       <Layout>
//         <SEO title="getDisplayMedia" keywords={[`getDisplayMedia`]} />
//         <h1>getDisplayMedia</h1>
//         <p>
//           <a href="https://w3c.github.io/mediacapture-screen-share.">
//             https://w3c.github.io/mediacapture-screen-share.
//           </a>
//         </p>
//         <p>Now go build something great.</p>
//         <Row gutter={16}>
//           <Col span={12}>
//             <Card title="参数">Form</Card>
//           </Col>
//           <Col span={12}>
//             <Card title="视频">Video</Card>
//           </Col>
//         </Row>
//         <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//           <Image />
//         </div>
//         <Link to="/page-2/">Go to page 2</Link>
//       </Layout>
//     )
//   }
// }

export default Form.create()(GetDisplayMedia)
