export interface CardProps {
    title: string;
    description: string;
    likes: number;
}

const Card = ({title, description, likes}: CardProps) => {
    return (
        <div className="bg-white p-4 shadow-md w-full">
            <p className="font-bold">{title}</p>
            <p className="text-gray-500">{description}</p>
            <p className="font-semibold">{likes}</p>
        </div>
    );
};

export default Card;