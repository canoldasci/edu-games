import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface DescriptionCardProps {
  title?: string;
  description?: string;
  content?: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  description,
  content,
}) => {
  return (
    <Card className="w-full max-w-xl m-1 ">
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      {content && (
        <CardContent>
          {" "}
          <p>{content}</p>
        </CardContent>
      )}
      {description && (
        <CardContent>
          <CardDescription>{description}</CardDescription>{" "}
        </CardContent>
      )}
    </Card>
  );
};
export default DescriptionCard;
