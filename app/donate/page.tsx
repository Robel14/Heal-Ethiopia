import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative h-[400px]">
          <div className="absolute inset-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2_2025-03-12_15-06-25.jpg-TTqX57rTTwAdCtE0fG9iqZYdYwKSp9.jpeg"
              alt="Donate to HEAL-Ethiopia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Make a Difference Today</h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Your donation helps us continue our vital work in healthcare, education, and community development
                across Ethiopia.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Support Our Mission</h2>
                <p className="text-gray-700">
                  Your generous contribution enables us to reach more communities and expand our programs. Choose how
                  you'd like to donate below.
                </p>
              </div>

              <Tabs defaultValue="one-time" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                </TabsList>

                <TabsContent value="one-time">
                  <Card>
                    <CardContent className="pt-6">
                      <form className="space-y-6">
                        <div className="space-y-4">
                          <Label>Select Amount</Label>
                          <RadioGroup defaultValue="1000" className="grid grid-cols-3 gap-4">
                            <Label
                              htmlFor="r1"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="1000" id="r1" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 1,000</span>
                            </Label>
                            <Label
                              htmlFor="r2"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="2500" id="r2" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 2,500</span>
                            </Label>
                            <Label
                              htmlFor="r3"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="5000" id="r3" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 5,000</span>
                            </Label>
                            <Label
                              htmlFor="r4"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="10000" id="r4" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 10,000</span>
                            </Label>
                            <Label
                              htmlFor="r5"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="25000" id="r5" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 25,000</span>
                            </Label>
                            <Label
                              htmlFor="r6"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="custom" id="r6" className="sr-only" />
                              <span className="text-xl font-bold">Custom</span>
                            </Label>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="custom-amount">Custom Amount (ETB)</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">ETB</span>
                            <Input id="custom-amount" type="number" placeholder="Enter amount" className="pl-12" />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input id="phone" type="tel" />
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                          Donate Now
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="monthly">
                  <Card>
                    <CardContent className="pt-6">
                      <form className="space-y-6">
                        <div className="space-y-4">
                          <Label>Select Monthly Amount</Label>
                          <RadioGroup defaultValue="500" className="grid grid-cols-3 gap-4">
                            <Label
                              htmlFor="m1"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="500" id="m1" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 500</span>
                            </Label>
                            <Label
                              htmlFor="m2"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="1000" id="m2" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 1,000</span>
                            </Label>
                            <Label
                              htmlFor="m3"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="2500" id="m3" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 2,500</span>
                            </Label>
                            <Label
                              htmlFor="m4"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="5000" id="m4" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 5,000</span>
                            </Label>
                            <Label
                              htmlFor="m5"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="10000" id="m5" className="sr-only" />
                              <span className="text-2xl font-bold">ETB 10,000</span>
                            </Label>
                            <Label
                              htmlFor="m6"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                            >
                              <RadioGroupItem value="custom" id="m6" className="sr-only" />
                              <span className="text-xl font-bold">Custom</span>
                            </Label>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="monthly-custom-amount">Custom Monthly Amount (ETB)</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">ETB</span>
                            <Input
                              id="monthly-custom-amount"
                              type="number"
                              placeholder="Enter amount"
                              className="pl-12"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="monthly-first-name">First Name</Label>
                              <Input id="monthly-first-name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="monthly-last-name">Last Name</Label>
                              <Input id="monthly-last-name" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="monthly-email">Email</Label>
                            <Input id="monthly-email" type="email" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="monthly-phone">Phone (Optional)</Label>
                            <Input id="monthly-phone" type="tel" />
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                          Start Monthly Donation
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Other Ways to Donate</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bank Transfer</h4>
                    <p className="text-gray-700 mb-2">
                      You can make a direct bank transfer to our account. Please include your name and "Donation" in the
                      reference.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <p className="mb-1">
                        <span className="font-medium">Bank Name:</span> Commercial Bank of Ethiopia
                      </p>
                      <p className="mb-1">
                        <span className="font-medium">Account Name:</span> HEAL-Ethiopia
                      </p>
                      <p className="mb-1">
                        <span className="font-medium">Account Number:</span> 1000123456789
                      </p>
                      <p>
                        <span className="font-medium">SWIFT Code:</span> CBETETAA
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mobile Money</h4>
                    <p className="text-gray-700 mb-2">
                      Send your donation via mobile money to our organization's account.
                    </p>
                    <div className="bg-white p-4 rounded border">
                      <p className="mb-1">
                        <span className="font-medium">Telebirr:</span> +251 91 234 5678
                      </p>
                      <p>
                        <span className="font-medium">CBE Birr:</span> +251 91 876 5432
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">Your Impact</h2>
                <p className="text-gray-700">
                  See how your donation can make a real difference in the lives of Ethiopian communities.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-green-600 font-bold text-2xl mb-2">ETB 1,000</div>
                  <p className="text-gray-700">
                    Provides clean water access for a family for one month, preventing waterborne diseases.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-green-600 font-bold text-2xl mb-2">ETB 5,000</div>
                  <p className="text-gray-700">
                    Supplies educational materials for 10 students, supporting their academic journey.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-green-600 font-bold text-2xl mb-2">ETB 10,000</div>
                  <p className="text-gray-700">
                    Funds healthcare services for 20 mothers and children in rural communities.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-700 mb-4">
                  For questions about donations or to discuss other ways to support our work, please contact us.
                </p>
                <Link href="/donate/contact-team">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Contact Our Donation Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

