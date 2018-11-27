let MSDocType = 'excel'

function generateExcel ({ infosData = [], labelTitle = {} } = {}) {
  let MSDocSchema = `xmlns:x="urn:schemas-microsoft-com:office:${MSDocType}"`
  let docData = `
  <html xmlns:o="urn:schemas-microsoft-com:office:office" ${MSDocSchema} xmlns="http://www.w3.org/TR/REC-html40">
    <meta http-equiv="content-type" content="application/vnd.ms-${MSDocType}; charset=UTF-8">
    <head>
      <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
          <x:ExcelWorksheets>
          <x:ExcelWorksheet>
          <x:Name>
            ${new Date()}
          </x:Name>
          <x:WorksheetOptions>
          <x:DisplayGridlines/>
          </x:WorksheetOptions>
          </x:ExcelWorksheet>
          </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
      <![endif]-->
      <style>br {mso-data-placement:same-cell;}</style>
    </head>
    <body>
      <Table>
        <thead><tr>
          ${Object.keys(labelTitle).reduce((result, label) => `${result}<td>${labelTitle[label]}</td>`, '')}
        </tr></thead>
        <tbody>
${infosData.reduce((result, item) => result + `<tr>${Object.keys(labelTitle).reduce((res, label) => `${res}<td>${item[label]}</td>`, '')}</tr>`, '')}
        </tbody>
      </Table>
    </body>
  </html>`
  return docData
}

function downloadFile ({docData, filename}) {
  var link = document.createElement('a')
  link.id = 'lnkDwnldLnk'
  link.setAttribute('download', filename + '.xls')
  document.body.appendChild(link)

  let csvUrl = null
  if (Reflect.has(Window, 'URL')) {
    let blob = new Blob([docData], {type: `application/vnd.ms-${MSDocType}`})
    csvUrl = window.URL.createObjectURL(blob)
  } else {
    csvUrl = `data:text/csv;charset=utf-8, \ufeff ${encodeURIComponent(docData)}`
  }

  link.setAttribute('href', csvUrl)
  link.click()
  link.parentNode.removeChild(link)
}

function exportExcel ({ filename, infosData, labelTitle }) {
  downloadFile({
    docData: generateExcel({infosData, labelTitle}),
    filename
  })
}

export default exportExcel
