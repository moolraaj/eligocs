import { Inter } from "next/font/google";
import "./css/App.scss";
import Layout from "./common/layout/lauout";
 
 



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
        </Layout>
     


          

       

      </body>

    </html>
  );
}
