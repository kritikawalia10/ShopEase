import React, { useEffect, useRef, useState } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
  const scannerRef = useRef(null);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    if (scanning) {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            constraints: {
              width: 480,
              height: 320,
              facingMode: "environment", 
            },
            target: scannerRef.current,
          },
          decoder: {
            readers: ["ean_reader", "code_128_reader"], 
          },
        },
        (err) => {
          if (err) {
            console.error("Error initializing Quagga:", err);
            return;
          }
          Quagga.start();
        }
      );

      Quagga.onDetected((data) => {
        console.log("Barcode detected:", data.codeResult.code);
        onDetected(data.codeResult.code); 
        Quagga.stop();
        setScanning(false);
      });

      return () => {
        Quagga.stop();
      };
    }
  }, [scanning, onDetected]);

  return (
    <div className="barcode-scanner">
      <button className="scan-btn" onClick={() => setScanning(true)}>Scan Barcode</button>
      {scanning && <div ref={scannerRef} className="scanner-preview"></div>}
    </div>
  );
};

export default BarcodeScanner;
