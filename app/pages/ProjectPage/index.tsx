
import React from "react"
import { Card, Button } from "antd"
import { GithubOutlined, LinkOutlined } from "@ant-design/icons"
import Link from "next/link"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  liveUrl: string
  githubUrl: string
}
const ProjectPage: React.FC = () => {
  const projects: Project[] = [
    {
      title: "OXO Packaging",
      description:
        "Full-featured e-commerce platform built with Laravel and Vue.js. Includes user authentication, product management, shopping cart, and payment integration.",
      image: "/assets/images/projects/oxo.png",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe API", "Tailwind CSS"],
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing", "Admin Dashboard"],
      liveUrl: "https://oxopackaging.com/",
      githubUrl: "https://github.com/username/ecommerce",
    },
    {
      title: "Versatile AI Agents for Devs, Businesses & Creators",
      description:
        "Collaborative task management application with real-time updates. Built using Laravel Livewire for dynamic interactions and MySQL for data persistence.",
      image: "/assets/images/projects/ithinqai.png",
      technologies: ["Laravel", "Livewire", "MySQL", "Bootstrap", "JavaScript"],
      features: [
        "Real-time Updates",
        "Team Collaboration",
        "Task Assignments",
        "Progress Tracking",
        "File Attachments",
      ],
      liveUrl: "https://ithinqai.com",
      githubUrl: "https://github.com/username/task-manager",
    },
    {
      title: "Renovbien",
      description:
        "Online reservation system for restaurants with table management, booking calendar, and customer notifications. Responsive design converted from Figma mockups.",
      image: "/assets/images/projects/renov.png",
      technologies: ["Laravel", "Vue.js", "MySQL", "Ant Design", "Email APIs"],
      features: [
        "Table Reservations",
        "Calendar Integration",
        "Email Notifications",
        "Customer Management",
        "Reporting Dashboard",
      ],
      liveUrl: "https://renovbien.com/",
      githubUrl: "https://github.com/username/restaurant-booking",
    },
    {
      title: "Lacuna Market Place",
      description:
        "Custom CMS built for content creators with drag-and-drop page builder, SEO optimization, and multi-user support. Designed with modern UI/UX principles.",
      image: "/assets/images/projects/lacuna.png",
      technologies: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "Redis"],
      features: ["Page Builder", "SEO Tools", "Multi-user Support", "Media Management", "Analytics Dashboard"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/shahzadali50/Lacuna_Marketplace",
    },
  ]
  return (
    <>

      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-36px text-center mb-12 text-gray-900">Featured Projects</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border-0"
                  cover={
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  }
                  actions={[
                    <Link key="live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        type="primary"
                        className="btn-primary flex items-center justify-center"
                        aria-label={`View live demo of ${project.title}`}
                        icon={<LinkOutlined />}
                      >
                        Live Demo
                      </Button>
                    </Link>,

                  ]}
                >
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="https://github.com/shahzadali50?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Button
                  size="large"
                  className="btn-outline flex items-center justify-center"
                  aria-label="View all projects on GitHub"
                  icon={<GithubOutlined />}
                >
                  View All Projects on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default ProjectPage;