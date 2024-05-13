import { Inter } from "next/font/google";
import "./css/App.scss";
import Layout from "./common/layout/layout";
import { Toaster } from "sonner";










const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eligo Cloud",
  description: "Generated by EligoCs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <Layout>

          {children}
          <Toaster richColors
            position='top-right'
            
            toastOptions={{
              style: {
                background: '#EAAA00',
                color:'#191C1B',
                fontWeight:600
              },
             
            }}
          />
        </Layout>



      </body>


    </html>
  );
}
