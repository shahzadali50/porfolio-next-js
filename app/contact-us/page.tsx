import React from 'react'
import { Row, Col } from "antd"
import ContactUs from '../pages/ContactUs'
function page() {
  return (
    <div>
         <section
        className="bg-cover bg-center py-16 sm:py-24 mt-[60px]"
        style={{ backgroundImage: "url('/assets/images/page-header-bg.jpg')" }}
      >
        <div className="container mx-auto">
          <Row>
            <Col span={24} className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-0">
                Contact Us
              </h1>
            </Col>
          </Row>
        </div>
      </section>
        <ContactUs/>
        </div>
  )
}

export default page