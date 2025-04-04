import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"

export default function ClimateResilienceDetailPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/impacts/publications" className="flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Publications
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-[300px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_74_2025-03-12_15-06-25.jpg-VPQnqymqVNcN7TzLjSNXEODhPElJSg.jpeg"
                alt="Climate Resilience Publication Cover"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-blue-700">
                    Climate Resilience and Sustainable Agriculture in Ethiopia
                  </h1>
                  <p className="text-gray-500">Research Paper | 2021</p>
                </div>
                <a href="/sample-publications/sample.pdf" download="climate-resilience.pdf">
                  <Button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </a>
              </div>

              <div className="border-b border-gray-200 pb-4 mb-6">
                <p className="font-semibold text-gray-700">Authors: Dereje Deme, Solomon Tadesse, et al.</p>
                <p className="text-gray-600">Published: November 2021</p>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-green-700 mb-4">Abstract</h2>
                <p className="mb-4">
                  This research paper examines the impact of climate change on agricultural communities in Ethiopia and
                  presents strategies for building resilience through sustainable farming practices. Drawing on field
                  research in four regions and HEAL-Ethiopia's agricultural development programs, the paper identifies
                  effective adaptation strategies and provides recommendations for scaling climate-resilient agriculture
                  across Ethiopia's diverse agroecological zones.
                </p>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Introduction</h2>
                <p className="mb-4">
                  Agriculture is the backbone of Ethiopia's economy, accounting for approximately 40% of GDP, 80% of
                  exports, and 75% of the country's employment. However, the sector faces significant challenges from
                  climate change, including increasing temperatures, changing rainfall patterns, and more frequent
                  extreme weather events. These changes threaten food security, livelihoods, and the overall resilience
                  of rural communities.
                </p>
                <p className="mb-4">This research paper addresses three key questions:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>
                    How are changing climate patterns affecting agricultural communities across Ethiopia's diverse
                    agroecological zones?
                  </li>
                  <li>What sustainable agricultural practices are proving effective in building climate resilience?</li>
                  <li>
                    What policy and programmatic approaches can support the scaling of climate-resilient agriculture?
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Methodology</h2>
                <p className="mb-4">
                  The research employed a mixed-methods approach combining quantitative and qualitative data collection
                  across four regions of Ethiopia: Amhara, Oromia, SNNPR, and Tigray. Methods included:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Climate data analysis from 20 meteorological stations (1980-2020)</li>
                  <li>Household surveys with 1,200 farming families</li>
                  <li>In-depth interviews with 80 key informants (farmers, extension workers, local officials)</li>
                  <li>12 focus group discussions with farmer groups</li>
                  <li>Field assessments of demonstration sites implementing climate-resilient practices</li>
                  <li>Analysis of program data from HEAL-Ethiopia's agricultural development initiatives</li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Key Findings: Climate Change Impacts</h2>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Observed Climate Changes</h3>
                <p className="mb-4">
                  Analysis of meteorological data revealed significant changes in climate patterns across the study
                  regions:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Temperature increases of 0.5-1.5°C over the past four decades, with higher increases in lowland
                    areas
                  </li>
                  <li>Greater rainfall variability, with more intense rainfall events and longer dry spells</li>
                  <li>Shifts in the timing of rainy seasons, particularly delayed onset of belg (short) rains</li>
                  <li>Increased frequency of extreme events, including droughts, floods, and hailstorms</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">Agricultural Impacts</h3>
                <p className="mb-4">These climate changes are affecting agricultural communities in multiple ways:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>
                    Reduced crop yields (reported by 78% of surveyed farmers), with average yield declines of 15-30%
                  </li>
                  <li>Increased pest and disease pressure affecting both crops and livestock</li>
                  <li>Water stress during critical growth stages, particularly for rain-fed crops</li>
                  <li>Soil degradation due to erosion from intense rainfall events</li>
                  <li>Loss of crop and livestock biodiversity as farmers abandon vulnerable varieties and breeds</li>
                  <li>Increasing competition and conflict over water and grazing resources</li>
                </ul>

                <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-yellow-700 mb-3">Regional Variations</h3>
                  <p className="mb-4">The research found important regional variations in climate impacts:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-2">Highland Areas (Amhara, parts of Tigray)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Erosion on steep slopes due to intense rainfall</li>
                        <li>Shifting suitability zones for traditional crops</li>
                        <li>New opportunities for growing previously lowland crops</li>
                        <li>Emergence of new pests and diseases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-2">Mid-altitude Areas (parts of Oromia, SNNPR)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Increased rainfall variability affecting planting times</li>
                        <li>More frequent crop failures due to dry spells</li>
                        <li>Heat stress affecting flowering and grain formation</li>
                        <li>Greater pressure on irrigation systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-2">Lowland Areas (parts of Oromia, SNNPR)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Severe water scarcity and drought conditions</li>
                        <li>Declining pasture quality for livestock</li>
                        <li>Increasing conflicts over water resources</li>
                        <li>Shifts in pastoral migration patterns</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-700 mb-2">Pastoral Areas (parts of all regions)</h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Changing rangeland vegetation composition</li>
                        <li>More frequent livestock diseases</li>
                        <li>Longer distances to travel for water and pasture</li>
                        <li>Pressure to transition to agro-pastoralism</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">
                  Effective Climate-Resilient Agricultural Practices
                </h2>
                <p className="mb-4">
                  The research identified several agricultural practices that are proving effective in building climate
                  resilience across different agroecological zones:
                </p>

                <h3 className="text-xl font-bold text-blue-600 mb-3">1. Soil and Water Conservation</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Terracing and bund construction reducing erosion by 60-80% on treated slopes</li>
                  <li>Check dams and water harvesting structures capturing runoff for productive use</li>
                  <li>Contour plowing and tied ridges increasing water infiltration and retention</li>
                  <li>Area enclosures and controlled grazing allowing natural vegetation recovery</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">2. Sustainable Land Management</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Conservation agriculture (minimum tillage, crop rotation, soil cover) improving soil health</li>
                  <li>Agroforestry systems integrating trees with crops and livestock for multiple benefits</li>
                  <li>Intercropping and crop diversification reducing risk of total crop failure</li>
                  <li>Integrated soil fertility management combining organic and inorganic inputs</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">3. Climate-Smart Crop Management</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Drought-tolerant crop varieties reducing yield losses during dry periods by 15-30%</li>
                  <li>Early maturing varieties fitting within shortened growing seasons</li>
                  <li>Adjusted planting times based on seasonal forecasts</li>
                  <li>Diversified crop portfolios spreading risk across multiple crops</li>
                  <li>Traditional seed saving and exchange systems preserving crop genetic diversity</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">4. Water Management</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Small-scale irrigation systems extending growing seasons and crop options</li>
                  <li>Water-efficient technologies like drip irrigation reducing water use by 30-50%</li>
                  <li>Rainwater harvesting for supplementary irrigation during dry spells</li>
                  <li>Watershed management approaches protecting water sources</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">5. Livestock Management</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Improved feeding practices reducing vulnerability to fodder shortages</li>
                  <li>Fodder production and conservation for dry season feeding</li>
                  <li>Heat-tolerant livestock breeds better adapted to changing conditions</li>
                  <li>Animal health services reducing losses from climate-related diseases</li>
                </ul>

                <div className="border-l-4 border-green-600 pl-4 py-2 my-6">
                  <p className="italic text-gray-700">
                    "I used to grow only maize, but after three years of poor harvests due to erratic rainfall, I
                    started diversifying my crops and implementing soil and water conservation on my farm. Now I grow
                    maize, beans, sweet potatoes, and vegetables using a small irrigation system. Even in bad years,
                    something always produces well, and my soil is getting better every year."
                  </p>
                  <p className="text-green-700 font-semibold">— Farmer, Oromia Region</p>
                </div>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">
                  Enabling Factors for Climate-Resilient Agriculture
                </h2>
                <p className="mb-4">
                  The research identified several enabling factors that support the adoption and scaling of
                  climate-resilient agricultural practices:
                </p>

                <h3 className="text-xl font-bold text-blue-600 mb-3">1. Knowledge and Information Systems</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Farmer Field Schools and demonstration plots providing hands-on learning</li>
                  <li>Farmer-to-farmer knowledge exchange facilitating adoption of new practices</li>
                  <li>Climate information services helping farmers make informed decisions</li>
                  <li>Integration of indigenous knowledge with scientific approaches</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">2. Institutional and Social Factors</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Strong farmer organizations supporting collective action and innovation</li>
                  <li>Community-based natural resource management systems</li>
                  <li>Women's participation in decision-making and leadership</li>
                  <li>Engagement of youth in agricultural entrepreneurship</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">3. Economic and Market Factors</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Access to credit and financial services for investment in new practices</li>
                  <li>Market linkages for climate-resilient agricultural products</li>
                  <li>Value addition and processing reducing post-harvest losses</li>
                  <li>Risk transfer mechanisms like weather-indexed insurance</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-600 mb-3">4. Policy and Governance Factors</h3>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Supportive agricultural extension services</li>
                  <li>Land tenure security encouraging long-term investments</li>
                  <li>Coordination between climate change and agricultural policies</li>
                  <li>Local government capacity for climate-responsive planning</li>
                </ul>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">
                  Recommendations for Scaling Climate-Resilient Agriculture
                </h2>
                <p className="mb-4">
                  Based on the research findings, the paper recommends the following approaches to scale
                  climate-resilient agriculture across Ethiopia:
                </p>

                <h3 className="text-xl font-bold text-blue-600 mb-3">For Government and Policymakers</h3>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>
                    Develop agroecological zone-specific climate adaptation strategies that account for regional
                    variations
                  </li>
                  <li>Strengthen climate information services and early warning systems for farmers</li>
                  <li>Invest in agricultural research focused on climate-resilient varieties and practices</li>
                  <li>Reform extension services to better support climate-resilient agriculture</li>
                  <li>Create incentives for private sector investment in climate-smart agricultural value chains</li>
                </ol>

                <h3 className="text-xl font-bold text-blue-600 mb-3">For Development Organizations</h3>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>
                    Apply participatory approaches that engage farmers in designing and implementing interventions
                  </li>
                  <li>Support farmer-to-farmer learning and exchange of best practices</li>
                  <li>Develop comprehensive programs that address the full range of enabling factors</li>
                  <li>Build local capacity for climate-resilient agriculture through training and mentoring</li>
                  <li>Document and share evidence on effective practices to inform policy and programming</li>
                </ol>

                <h3 className="text-xl font-bold text-blue-600 mb-3">For Research Institutions</h3>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>Conduct long-term studies on the performance of climate-resilient practices</li>
                  <li>Develop improved crop varieties and livestock breeds adapted to changing conditions</li>
                  <li>Investigate cost-effective approaches for scaling climate-resilient practices</li>
                  <li>
                    Engage in transdisciplinary research that bridges agriculture, climate science, and social sciences
                  </li>
                </ol>

                <h3 className="text-xl font-bold text-blue-600 mb-3">For Farmers and Community Organizations</h3>
                <ol className="list-decimal pl-6 space-y-2 mb-6">
                  <li>Strengthen collective action for natural resource management and climate adaptation</li>
                  <li>Document and share indigenous knowledge and innovations for climate resilience</li>
                  <li>Diversify livelihood strategies to reduce vulnerability to climate shocks</li>
                  <li>Advocate for policies and programs that support climate-resilient agriculture</li>
                </ol>

                <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8">Conclusion</h2>
                <p className="mb-4">
                  Climate change poses significant challenges to Ethiopian agriculture, but this research demonstrates
                  that effective adaptation strategies exist and are being successfully implemented by farmers across
                  the country. Building on these successes requires a coordinated approach that combines technical
                  innovations, institutional strengthening, and policy support.
                </p>
                <p className="mb-4">
                  By investing in climate-resilient agriculture, Ethiopia can not only protect its agricultural sector
                  from climate impacts but also enhance food security, improve livelihoods, and contribute to
                  sustainable development goals.
                </p>

                <p className="text-gray-600 italic mt-12">
                  For the complete research paper with detailed methodology, findings, and recommendations, please
                  download the PDF using the button above.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <a href="/sample-publications/sample.pdf" download="climate-resilience.pdf">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Report (PDF)
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

