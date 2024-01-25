import React from 'react';
import euImage from '../assets/img/dog.jpeg';


function Photo() {

    return (
        <div className="container-photo">
            <figure class="image-block">
            	<img src={euImage} alt="Darlison Silva" />
            	<figcaption>
                    <p>
                        Darlison Silva, 25 anos, natural de Itaituba - PA, residente em Tubarão - SC.
                    </p>
            	</figcaption>
            </figure>

        </div>
    );
};

export default Photo;