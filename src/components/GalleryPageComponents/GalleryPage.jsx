import React, { useEffect } from 'react'
import image1 from '../../resources/images/img1.jpg'
import image2 from '../../resources/images/img2.jpg'
import image3 from '../../resources/images/img3.jpg'
import image4 from '../../resources/images/img4.jpg'
import image5 from '../../resources/images/img5.jpg'
import GalleryCarousal from './GalleryCarousal'
import GalleryPhoto from './GalleryContentTwo'
import YtFrame1 from './YtFrame1'
import YtFrame2 from './YtFrame2'

export default function GalleryPage() {
	useEffect(() => {
		document.body.scrollTop = 0 // For Safari
		document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
	}, [])
	return (
		<div class="new-gallery-page">
			<div class="page-title">
				<h1>Memories</h1>
				<h4>Take a trip down memory lane and relive the unforgettable moments of our fest.
				<br/>These photos will make you smile, laugh, and cry all over again</h4>
			</div>

			<div class="image-collage">
			

				
				<div class="grid-container1">
					<div class="grid-item" ><div class="long-img"><img src={image1}/></div></div>
					<div class="grid-item"><img src={image2}/></div>
					<div class="grid-item"><img src={image3}/></div>
					<div></div>
					<div class="grid-item"><img src={image4}/></div>
					<div class="grid-item"><img src={image5}/></div>
				</div>

				<div class="grid-container2">
					<div class="grid-item"><img src={image2}/></div>
					<div class="grid-item"><img src={image4}/></div>
				</div>

				<div class="grid-container3">
					<div class="grid-item" ><img src={image5}/></div>
					<div class="grid-item"><img src={image4}/></div>
					<div class="grid-item"><img src={image1}/></div>
					<div class="grid-item"><div class="long-img"><img src={image5}/></div></div>
					<div class="grid-item"><img src={image5}/></div>
					<div class="grid-item"><img src={image2}/></div>
					<div class="grid-item"><img src={image4}/></div>
					<div></div>
					
				</div>

					

			</div>

			<div class="albums-container">

				<div class="album">
					<img src={image1} alt="Image1"/>
					<h6>2024</h6>
				</div>

				<div class="album">
					<img src={image2} alt="Image2"/>
					<h6>2023</h6>
				</div>

				<div class="album">
					<img src={image3} alt="Image3"/>
					<h6>2022</h6>
				</div>

			</div>

			<div class="albums-container">

				<div class="album">
					<img src={image4} alt="Image4"/>
					<h6>2021</h6>
				</div>

				<div class="album">
					<img src={image5} alt="Image5"/>
					<h6>2020</h6>
				</div>


			</div>

			<div class="divider"></div>

		</div>
	)
}