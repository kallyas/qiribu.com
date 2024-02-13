import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFLoader = () => {
  <Skeleton height={500} />;
};

const PDFViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Document loading={<PDFLoader />} file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
  );
};

export default PDFViewer;
