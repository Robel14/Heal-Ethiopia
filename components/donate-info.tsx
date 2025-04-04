export default function DonateInfo() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
              <p className="text-gray-700 mb-2">Send your donation via mobile money to our organization's account.</p>
              <div className="bg-white p-4 rounded border">
                <p className="mb-1">
                  <span className="font-medium">Telebirr:</span> +251 91 234 5678
                </p>
                <p>
                  <span className="font-medium">CBE Birr:</span> +251 91 876 5432
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Mail a Check</h4>
              <p className="text-gray-700 mb-2">
                Please make checks payable to "HEAL-Ethiopia" and mail to our office address:
              </p>
              <div className="bg-white p-4 rounded border">
                <p>
                  HEAL-Ethiopia
                  <br />
                  P.O. Box 1234
                  <br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

