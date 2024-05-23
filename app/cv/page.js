/* make CV go to this too with next.js !!! todo !!!*/

// https://stackoverflow.com/questions/75511392/pdf-in-iframe-only-first-page-on-iphone-ipad-view#:~:text=PDFs%20are%20not%20supported%20in,embedded%20inside%20an%20HTML%20page.
// i frame only display first page on iphones
export default function cv() {
  return (
    <>
      <div className="iframeCont">
        <iframe src="/files/cv/CV.pdf" width="100%" height="100%"></iframe>
      </div>
      <div className="iframebelowcont">
        <a href="/files/cv/CV.pdf" target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </div>
    </>
  );
}
