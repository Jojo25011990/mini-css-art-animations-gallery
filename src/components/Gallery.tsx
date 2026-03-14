import GalleryItem from "./GalleryItem";
import { miniProjects } from "../data/MiniProjects";

const Gallery = () => {
	return (
		<div className="w-full h-full grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{miniProjects.map((miniProject) => (
				<GalleryItem key={miniProject.id} miniProject={miniProject} />
			))}
		</div>
	);
};

export default Gallery;
