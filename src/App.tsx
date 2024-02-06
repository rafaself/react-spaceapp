import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import { MyHeader } from "./components/Header/header"
import SideNav from "./components/SideNav"
import Banner from "./components/Banner"
import bannerImage from "/images/banner.png"
import Gallery from "./components/Gallery"

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContent = styled.div`
  max-width: 100%;
  margin: 0 24px;
`

const BodyContent = styled.div`
  display: flex;
  gap: 24px;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  const galleryData = [
    {
      title: "Títutlo",
      subtitle: "Legenda",
      image: "/gallery/foto-1.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-2.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-3.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-4.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-5.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-6.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-7.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-8.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-9.png"
    },
    {
      title: "Títutlo 2",
      subtitle: "Legenda 2",
      image: "/gallery/foto-10.png"
    },
  ]

  return (
    <>
      <BackgroundGradient >

        <GlobalStyles />

        <AppContent>

          <MyHeader />

          <BodyContent>

            <SideNav />

            <MainContent>
              <Banner text="A galeria mais completa de fotos do espaço!" image={bannerImage} />
              <Gallery galleryData={galleryData} />
            </MainContent>

          </BodyContent>

        </AppContent>

      </BackgroundGradient>
    </>
  )
}

export default App
