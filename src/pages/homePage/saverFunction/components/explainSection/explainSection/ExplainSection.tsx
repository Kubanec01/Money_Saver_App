import { ExplainBars } from "../components/explainBars/explainBars/ExplainBars"


export const ExplainSection = () => {
    return (
        <div
        className="mt-[300px] mb-[80px] w-[90%] max-w-[1500px] mx-auto"
        >
            <div>
                <p
                className="uppercase text-spaceNeonBlue text-center text-2xl"
                >
                    explanation
                </p>
                <h1
                className="text-4xl text-[white] text-center font-extrabold relative
                after:absolute after:h-[2px] after:w-[54%] after:bg-[#ffffff9d] after:-bottom-4 after:left-[23%] after:rounded-[20px]
                "
                >
                    Protocols for Your Intergalactic Voyage
                </h1>
            </div>
            <div
            className="mt-[60px] w-[46%] mx-auto"
            >
                <ExplainBars />
            </div>
        </div>
    )
}