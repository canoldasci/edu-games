import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface DescriptionCardProps {
  title: string;
  description: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  title,
  description,
}) => {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
export default DescriptionCard;
