import { styled } from "styled-components"
import Title from "./Title";
import Tags from "./Tags";
import ImageCard from "./ImageCard";

interface GalleryData {
    title: string;
    subtitle: string;
    image: string;
}

interface GalleryProps {
    galleryData: GalleryData[];
}

const GalleryContainer = styled.div`
    display: flex;
`

const GalleryMain = styled.section`
    flex-grow: 1;
`

const GalleryMainImages = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;
`

const GalleryPopulars = styled.section`
    /* Adicione estilos adicionais conforme necessário */
`

const Gallery = ({ galleryData }: GalleryProps) => {
    return (
        <>
            <Tags />

            <GalleryContainer>
                <GalleryMain>
                    <Title>
                        Navegue pela galeria
                    </Title>
                    <GalleryMainImages>
                        {galleryData.map((data, index) => (
                            <ImageCard key={index} title={data.title} subtitle={data.subtitle} image={data.image} />
                        ))}
                    </GalleryMainImages>
                </GalleryMain>

                <GalleryPopulars>
                    <Title>
                        Populares
                    </Title>
                </GalleryPopulars>
            </GalleryContainer>
        </>
    )
}

export default Gallery;
