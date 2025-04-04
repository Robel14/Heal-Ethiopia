/**
 * Helper function to download a PDF file
 * @param filePath Path to the PDF file
 * @param fileName Name to save the file as
 */
export const downloadPDF = (filePath: string, fileName: string) => {
  // Create a link element
  const link = document.createElement("a")

  // Set the href to the file path
  link.href = filePath

  // Set the download attribute to the file name
  link.download = fileName

  // Append the link to the body
  document.body.appendChild(link)

  // Click the link to trigger the download
  link.click()

  // Remove the link from the body
  document.body.removeChild(link)
}

