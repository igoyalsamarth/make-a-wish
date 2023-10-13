export default async function MainText() {
    return(
        <form className="flex flex-col fixed w-[500px] left-[50%] -ml-[250px] top-[30%] bg-slate-200/50 backdrop-blur rounded-lg p-6 gap-3">
            <p className="text-5xl font-bold text-center">अपनी इच्छा जहीर करो वत्स!</p>
            <label>Name:</label>
            <input className="p-2 text-xs active:border-0 rounded-lg"></input>
            <label>Wish:</label>
            <textarea className="p-2 rounded-lg text-xs"></textarea>
            <button  className="bg-black/10 rounded-full py-2 px-4 w-fit self-center">SUBMIT</button>
        </form>
    );
}