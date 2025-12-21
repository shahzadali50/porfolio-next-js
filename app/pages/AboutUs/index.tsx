
import React from "react"
import { Row, Col } from "antd"
import Image from "next/image"
const AboutUs: React.FC = () => {
  return (
    <>
      <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Row gutter={[48, 48]} align="middle">
          {/* Image Section */}
          <Col xs={24} lg={12}>
          <h2 className="block lg:hidden font-36px text-gray-900">About Me</h2>
          <Image
              src="/assets/images/shahzad-ali.png"
              alt="Developer Profile"
              className="object-cover"
              width={500} // Specify the width (in pixels)
              height={300} // Specify the height (in pixels)
            />
          </Col>

          {/* Text Section */}
          <Col xs={24} lg={12}>
            <h2 className="font-36px text-gray-900 mb-6 hidden lg:block">About Me</h2>

            <div className="text-base text-gray-600 space-y-4 leading-relaxed">
              <p className="font-18px">
                I&apos;m <span className="font-bold"> Shahzad Ali</span> , a professional PHP Laravel Developer and Full-Stack Engineer with over 2+ years of hands-on experience building secure, scalable, and high-performance web applications. I specialize in developing powerful backend systems using Laravel, paired with dynamic frontends using React.js, Vue.js.
              </p>
              <p className="font-18px">
              My expertise includes handling large datasets, integrating complex APIs, and delivering enterprise-level solutions for businesses across various industries. I take pride in writing clean, maintainable code and following best practices to ensure long-term reliability.
              </p>
              <p className="font-18px">
              Passionate about technology and problem-solving, I’m committed to turning ideas into impactful digital products that drive real results.
              </p>
            </div>

            {/* <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Tag key={skill} color="red" className="px-3 py-1 text-sm font-medium">
                    {skill}
                  </Tag>
                ))}
              </div>
            </div> */}
            <Row gutter={[16, 16]} className="mt-10">
              <Col span={8}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">10+</div>
                  <div className="text-gray-600 text-sm">Happy Clients</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
    </>
  )
}
export default AboutUs;