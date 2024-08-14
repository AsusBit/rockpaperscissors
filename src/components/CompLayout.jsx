export default function CompLayout({img}){
    return (
        <div>
            <p className=' text-white text-[1.3rem] sm:text-[3rem]'>
                COMPUTER
            </p>
        <img alt={toString(img)} className=' w-[10rem] sm:w-[300px]' src={img}></img>
        </div>
    )
}