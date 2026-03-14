type GalleryItemProps = {
	miniProject: {
		id: number;
		src: string;
		srcDemo: string;
		srcCode: string;
		title: string;
		description: string;
	};
};

const GalleryItem = ({ miniProject }: GalleryItemProps) => {
	return (
		<figure className="h-87.5 flex flex-col">
			<div className="relative aspect-4/5 overflow-hidden rounded-lg card-img">
				<img
					src={miniProject.src}
					alt={miniProject.title}
					className={`w-full h-full object-cover ${miniProject.id === 9 ? "object-center" : "object-top"}`}
				/>

				<div className="card-img-overlay">
					<a
						href={miniProject.srcDemo}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View live demo of ${miniProject.title}`}
					>
						view project
						<span></span>
					</a>
					<a
						href={miniProject.srcCode}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View code of ${miniProject.title}`}
					>
						view code
						<span></span>
					</a>
				</div>
			</div>

			<figcaption className="mt-2 text-center text-sm text-white">
				<h3 className="text-lg font-bold">{miniProject.title}</h3>
				<p>{miniProject.description}</p>
			</figcaption>
		</figure>
	);
};

export default GalleryItem;
