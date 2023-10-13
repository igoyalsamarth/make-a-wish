import MainMessage from '@/components/mainMessage';
import MainText from '@/components/mainText'
import data from '@/data/data.json'

export interface PassingProps{
  id:string,
  message:string,
  message2:string,
  index:number
}

export default async function Home() {

  return (
    <div className="w-full h-[100vh] overflow-scroll relative">
      {data['data'].map((item, index) => {
        const passingProps:PassingProps = {id:item.id, message:item.message, message2:item.message2, index:index}
        return(
          <MainMessage props={passingProps} />
        );
      })}
      <MainText />
    </div>
  )
}
