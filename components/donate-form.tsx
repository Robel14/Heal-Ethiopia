import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DonateForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Support Our Mission</h2>
            <p className="text-gray-700">
              Your generous contribution enables us to reach more communities and expand our programs. Choose how you'd
              like to donate below.
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
                        <Input id="monthly-custom-amount" type="number" placeholder="Enter amount" className="pl-12" />
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
        </div>
      </div>
    </section>
  )
}

