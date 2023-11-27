import { Paragraph } from "./Paragraph"

interface Props {
  mood: "😀" | "😐" | "😢";
}


export const CurrentMood: React.FC<Props> = ({ mood }) => {
  return <Paragraph>My current mood is {mood}</Paragraph>
}
