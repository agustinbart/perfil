import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Card from './Card';

const Cards = () => {
    
    const [sites, setSites] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchSites = async () => {
            try {
                const response = await fetch(`http://localhost:777/projects`);
                if (!response.ok) throw Error('No se recibió data');
                const listSites = await response.json();
                console.log(listSites);
                setSites(listSites);
                setFetchError(null);
            } catch (err) {
                setFetchError(err.message);
            }
        }

        (async () => await fetchSites())();
    }, [])

    var settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className='content'>
            <Slider {...settings}> {
                sites.map((card, id) => (
                    <div key={id}>
                        <Card id={card.id} title={card.title} image={card.image} info={card.info} />
                    </div>
                )
                )}
            </Slider>
        </div>
    )
};

export default Cards;