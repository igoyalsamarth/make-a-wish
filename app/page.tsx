import MainMessage from '@/components/mainMessage';
import MainText from '@/components/mainText'
import data from '@/data/data.json'
import { getAllMessages } from '@/lib/message';

export interface PassingProps{
  id:string,
  message:string,
  message2:string,
  index:number
}

export default async function Home() {
  const data = await getAllMessages();
  return (
    <div className="w-full h-[100vh] overflow-scroll relative">
      {data.map((item:any, index:number) => {
        const passingProps:PassingProps = {id:item._id, message:item.data.message, message2:item.data.message2, index:index}
        return(
          <MainMessage props={passingProps} key={item._id}/>
        );
      })}
      <MainText />
    </div>
  )
}
