import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowLeft } from "lucide-react"

// This would normally come from a database, but for now we'll use static data
const newsItems = [
  {
    id: "news-1",
    title: "HEAL Ethiopia Launches New Youth Development Center",
    date: "March 14, 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_9_2025-03-14_11-41-55.jpg-XFrqImuAOUfVVwY4cuihq2SBnZrlBq.jpeg",
    category: "Latest News",
    content: `
      <p>HEAL Ethiopia is proud to announce the opening of a state-of-the-art youth development center in Addis Ababa. The center, which was inaugurated on March 10, 2023, will serve as a hub for youth empowerment, education, and skills development.</p>
      
      <p>The center features computer training facilities, a library, recreational areas, and spaces for workshops and educational activities. It aims to provide young people with the resources and support they need to develop their skills, pursue their interests, and become active contributors to their communities.</p>
      
      <p>"This center represents our commitment to investing in the future of Ethiopia through its youth," said Dr. Abebe Bekele, Executive Director of HEAL Ethiopia. "By providing young people with access to quality resources, mentorship, and opportunities for personal and professional growth, we are helping to build a generation of empowered, skilled, and engaged citizens."</p>
      
      <p>The center will offer a range of programs, including:</p>
      <ul>
        <li>Digital literacy and computer skills training</li>
        <li>Leadership and entrepreneurship development</li>
        <li>Career guidance and job readiness</li>
        <li>Life skills and health education</li>
        <li>Arts and creative expression</li>
        <li>Sports and physical activities</li>
      </ul>
      
      <p>The establishment of the center was made possible through the generous support of our partners and donors, including the Ministry of Youth and Sports, UNICEF, and private sector contributors.</p>
      
      <p>The center is expected to benefit over 5,000 young people annually, with a focus on reaching those from underserved communities. It will operate six days a week and offer both structured programs and drop-in services.</p>
      
      <p>This initiative is part of HEAL Ethiopia's broader youth development strategy, which aims to empower young people to lead healthy, productive lives and contribute to the sustainable development of their communities and country.</p>
      
      <p>For more information about the youth development center or to get involved, please contact our office at info@healethiopia.org or visit the center at Bole Sub-City, Addis Ababa.</p>
    `,
  },
  {
    id: "news-2",
    title: "Partnership with Ministry of Health Announced",
    date: "February 15, 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_3_2025-03-14_11-41-55.jpg-9wk3XctmUTAoxpFp7E7UY0nBqeVmLl.jpeg",
    category: "Partnership",
    content: `
      <p>HEAL Ethiopia is pleased to announce a new partnership with the Ethiopian Ministry of Health to improve healthcare services in underserved communities across the country. The memorandum of understanding (MOU) was signed on February 12, 2023, at a ceremony attended by representatives from both organizations.</p>
      
      <p>This strategic partnership aims to strengthen primary healthcare systems, enhance maternal and child health services, and improve access to quality healthcare for vulnerable populations. It builds on years of collaboration between HEAL Ethiopia and the Ministry of Health on various health initiatives.</p>
      
      <p>"This partnership represents a significant step forward in our efforts to ensure that all Ethiopians have access to quality healthcare services," said Dr. Lia Tadesse, Minister of Health. "By combining the resources, expertise, and reach of the Ministry with the innovative approaches and community-based experience of HEAL Ethiopia, we can make meaningful progress toward our shared health goals."</p>
      
      <p>Under the agreement, HEAL Ethiopia and the Ministry of Health will collaborate on several key initiatives:</p>
      <ul>
        <li>Strengthening community health worker programs in rural areas</li>
        <li>Improving maternal and child health services in underserved regions</li>
        <li>Enhancing health facility infrastructure and equipment</li>
        <li>Training healthcare providers on quality care and service delivery</li>
        <li>Implementing innovative approaches to healthcare delivery</li>
        <li>Conducting joint research and monitoring and evaluation activities</li>
      </ul>
      
      <p>The partnership will initially focus on four regions: Oromia, Amhara, SNNPR, and Tigray, with plans to expand to other regions in the future. It is expected to benefit over 2 million people over the next five years.</p>
      
      <p>"We are honored to formalize our partnership with the Ministry of Health," said Dr. Abebe Bekele, Executive Director of HEAL Ethiopia. "This collaboration allows us to align our efforts with national health priorities and leverage our respective strengths to achieve greater impact. Together, we can work toward our shared vision of a healthier Ethiopia where all people have access to quality healthcare services."</p>
      
      <p>The partnership will be guided by a joint steering committee that will meet quarterly to review progress, address challenges, and ensure alignment with national health strategies and priorities.</p>
      
      <p>For more information about this partnership or HEAL Ethiopia's health programs, please contact our office at info@healethiopia.org.</p>
    `,
  },
  {
    id: "news-3",
    title: "Annual Report Shows Significant Impact",
    date: "January 30, 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-14_11-41-55.jpg-lGxbP6tUFNQJF63gNnweDw2Driq7QH.jpeg",
    category: "Report",
    content: `
      <p>HEAL Ethiopia is proud to release its 2022 Annual Report, which highlights the organization's significant impact across all program areas. The report, which covers the period from January to December 2022, shows that HEAL Ethiopia reached over 20,000 beneficiaries through its various initiatives in health, education, agriculture, and livelihoods.</p>
      
      <p>"Despite the challenges posed by the ongoing conflict, economic difficulties, and climate-related issues, 2022 was a year of resilience, adaptation, and impact for HEAL Ethiopia," said Dr. Abebe Bekele, Executive Director. "Through the dedication of our staff, the support of our partners and donors, and the engagement of the communities we serve, we were able to make meaningful progress toward our mission of empowering communities for sustainable development."</p>
      
      <p>Key highlights from the report include:</p>
      <ul>
        <li><strong>Health:</strong> Provided maternal and child health services to 8,500 women and children, trained 150 community health workers, and supported 25 health facilities with equipment and supplies.</li>
        <li><strong>Education:</strong> Constructed or renovated 10 schools, provided educational materials to 5,000 students, and trained 200 teachers on improved teaching methodologies.</li>
        <li><strong>Agriculture:</strong> Trained 1,500 farmers on climate-smart agricultural practices, established 20 farmer demonstration sites, and provided seeds and tools to 1,000 households.</li>
        <li><strong>Livelihoods:</strong> Supported 500 women and youth with vocational training and business development services, facilitated the formation of 30 savings and credit groups, and created 300 new jobs through various initiatives.</li>
        <li><strong>Emergency Response:</strong> Provided humanitarian assistance to 3,000 people affected by conflict and drought, including food, water, shelter, and healthcare services.</li>
      </ul>
      
      <p>The report also highlights HEAL Ethiopia's commitment to sustainability, innovation, and partnership. In 2022, the organization formed new partnerships with 5 international organizations and 3 government agencies, piloted 3 innovative approaches to development challenges, and strengthened its monitoring, evaluation, and learning systems.</p>
      
      <p>"As we look ahead to 2023 and beyond, we remain committed to our vision of resilient communities that can adapt to challenges and sustain their development gains," said Dr. Bekele. "We will continue to work in partnership with communities, government, and other stakeholders to address the root causes of poverty and inequality, with a focus on the most vulnerable populations."</p>
      
      <p>The full annual report is available for download on our website at www.healethiopia.org/annual-report-2022. For more information or to request a printed copy, please contact our office at info@healethiopia.org.</p>
    `,
  },
  {
    id: "news-4",
    title: "New Water Project Completed in Oromia Region",
    date: "December 12, 2022",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_86_2025-03-12_15-06-25.jpg-YOs7OpGlOirZQB9kzaLzllH44ymxgz.jpeg",
    category: "Project Completion",
    content: `
      <p>HEAL Ethiopia is pleased to announce the successful completion of a major water project in the Oromia Region, providing clean water to five communities. The project, which was implemented over a period of 18 months, included well construction, water distribution systems, and hygiene education.</p>
      
      <p>"Access to clean water is a fundamental human right and a prerequisite for health, education, and economic development," said Dr. Abebe Bekele, Executive Director of HEAL Ethiopia. "This project represents our commitment to addressing the basic needs of communities and creating the foundation for sustainable development."</p>
      
      <p>The water project, which was funded by a grant from the Water for Life Foundation and implemented in partnership with the Oromia Water Bureau, includes:</p>
      <ul>
        <li>Construction of 5 deep wells with hand pumps</li>
        <li>Installation of 10 kilometers of water distribution pipes</li>
        <li>Establishment of 20 water points in strategic locations</li>
        <li>Formation and training of 5 water management committees</li>
        <li>Hygiene and sanitation education for 5,000 community members</li>
        <li>Construction of 10 public latrines near schools and health centers</li>
      </ul>
      
      <p>The project is expected to benefit approximately 15,000 people across the five communities, significantly reducing the time and effort required to collect water, especially for women and girls who traditionally bear this responsibility. It will also contribute to improved health outcomes by reducing waterborne diseases and promoting better hygiene practices.</p>
      
      <p>"Before this project, I had to walk for two hours each day to collect water from a river, which was often contaminated," said Fatuma Ali, a resident of one of the beneficiary communities. "Now, I have access to clean water just a few minutes from my home. This has changed my life and the lives of my children. We are healthier, and my daughters have more time for school and other activities."</p>
      
      <p>To ensure the sustainability of the water systems, HEAL Ethiopia has worked closely with the communities to establish water management committees responsible for the operation and maintenance of the facilities. These committees have been trained on basic maintenance, financial management, and community mobilization. A small fee is collected from users to cover maintenance costs and ensure the long-term functionality of the systems.</p>
      
      <p>"This project demonstrates the power of partnership and community engagement in addressing development challenges," said Ato Gemechu Desta, Head of the Oromia Water Bureau. "By working together with HEAL Ethiopia and the communities, we have been able to create sustainable solutions that will benefit these communities for years to come."</p>
      
      <p>HEAL Ethiopia will continue to monitor the water systems and provide technical support to the water management committees for the next two years to ensure their proper functioning and sustainability.</p>
      
      <p>For more information about this project or HEAL Ethiopia's water and sanitation programs, please contact our office at info@healethiopia.org.</p>
    `,
  },
  {
    id: "news-5",
    title: "HEAL Ethiopia Receives Award for Excellence",
    date: "November 5, 2022",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_75_2025-03-12_15-06-25.jpg-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.jpeg",
    category: "Recognition",
    content: `
      <p>HEAL Ethiopia is honored to announce that it has been recognized with an award for excellence in nonprofit management by the Ethiopian Charities and Societies Agency. The award, which was presented at a ceremony in Addis Ababa on November 3, 2022, acknowledges the organization's transparency, effectiveness, and impact in implementing development programs across Ethiopia.</p>
      
      <p>"This award is a testament to the dedication and hard work of our entire team, from our staff and volunteers to our board members and partners," said Dr. Abebe Bekele, Executive Director of HEAL Ethiopia. "It reflects our commitment to upholding the highest standards of integrity, accountability, and excellence in all aspects of our work."</p>
      
      <p>The Ethiopian Charities and Societies Agency, which regulates and oversees the operations of nonprofit organizations in the country, selected HEAL Ethiopia for this recognition based on a comprehensive assessment of its governance, financial management, program implementation, and impact. The assessment included a review of documentation, site visits to project locations, and interviews with staff, beneficiaries, and partners.</p>
      
      <p>In presenting the award, Ato Yohannes Woldemariam, Director of the Ethiopian Charities and Societies Agency, commended HEAL Ethiopia for its:</p>
      <ul>
        <li>Strong governance structure and adherence to legal and regulatory requirements</li>
        <li>Transparent and accountable financial management systems</li>
        <li>Effective program design, implementation, and monitoring</li>
        <li>Meaningful engagement with communities and stakeholders</li>
        <li>Significant and measurable impact on the lives of beneficiaries</li>
        <li>Commitment to learning, innovation, and continuous improvement</li>
      </ul>
      
      <p>"HEAL Ethiopia serves as a model for other organizations in the sector," said Ato Woldemariam. "Their approach to development is characterized by a deep respect for the communities they serve, a commitment to sustainability, and a focus on building local capacity. We are pleased to recognize their exemplary work with this award."</p>
      
      <p>Dr. Bekele accepted the award on behalf of HEAL Ethiopia and expressed gratitude to the Agency for the recognition. He also acknowledged the support of the organization's donors, partners, and the communities it serves.</p>
      
      <p>"This award inspires us to continue striving for excellence and to expand our impact," said Dr. Bekele. "We remain committed to our mission of empowering communities for sustainable development and to working in partnership with all stakeholders to address the challenges facing Ethiopia."</p>
      
      <p>The award includes a certificate of recognition, a trophy, and a grant of 500,000 Ethiopian Birr to support HEAL Ethiopia's organizational development and capacity-building efforts.</p>
      
      <p>For more information about HEAL Ethiopia and its programs, please visit our website at www.healethiopia.org or contact our office at info@healethiopia.org.</p>
    `,
  },
]

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  // Find the news item with the matching ID
  const newsItem = newsItems.find((item) => item.id === params.id) || newsItems[0]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="relative h-[400px]">
          <Image
            src={newsItem.image || "/placeholder.svg"}
            alt={newsItem.title}
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-4">
                  {newsItem.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{newsItem.title}</h1>
                <div className="flex items-center text-white/90">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  <span>{newsItem.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <Link href="/announcement/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content }}></div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                  Facebook
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-500 hover:bg-blue-50">
                  Twitter
                </Button>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  WhatsApp
                </Button>
                <Button variant="outline" className="border-blue-700 text-blue-800 hover:bg-blue-50">
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

