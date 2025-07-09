"use client"

import { Button, Typography, Row, Col } from "antd"
import { ArrowRightOutlined, DownloadOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import styles from "./Banner.module.css"

const { Title, Paragraph } = Typography

export function Banner() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 64
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="home" className={styles.bannerSection}>
      <div className={styles.bannerContainer}>
        <Row gutter={[32, 32]} align="middle">
          {/* Text Section */}
          <Col xs={{ span: 24, order: 2 }} lg={{ span: 12, order: 1 }}>
            <Title level={1} className="font-48px" style={{ marginBottom: 24 }}>
              Build Fast <br />
              <span className="text-primary">Applications</span> <br />
              with Laravel + Vue Js
            </Title>

            <Paragraph style={{ fontSize: 18, color: "#595959" }}>
              PHP Laravel Developer and Full-Stack Engineer with a focus on crafting secure, scalable, and high-performance web applications. Proficient in Laravel and Vue.js.
            </Paragraph>
            <Paragraph style={{ fontSize: 18, color: "#595959", marginBottom: 32 }}>
              Demonstrated expertise in handling large datasets, integrating complex APIs, and delivering enterprise-grade solutions.  
              Driven by a passion for transforming ideas into impactful digital experiences.
            </Paragraph>

            <div className={styles.buttonGroup}>
              <Button
                className="btn-primary"
                type="primary"
                size="large"
                onClick={() => handleNavClick("#about")}
                icon={<ArrowRightOutlined />}
                aria-label="View My Work"
              >
                View My Work
              </Button>

              <Link href="/cv/Shahzad-Ali.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="large"
                icon={<DownloadOutlined />}
                aria-label="Download Resume"
              >
               Resume
              </Button>
            </Link>

            </div>
          </Col>

          {/* Image Section */}
          <Col
            xs={{ span: 24, order: 1 }}
            lg={{ span: 12, order: 2 }}
            style={{ textAlign: "center" }}
          >
            <div className="relative w-full h-64 md:h-96 lg:h-[400px] floating-image">
              <Image
                src="/assets/images/laravel-hero.webp"
                alt="Laravel Framework Hero Illustration"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ 
                  objectFit: 'contain',
                  animation: 'moveUpDown 3s ease-in-out infinite'
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
