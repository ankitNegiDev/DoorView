// we will create a basic component that will show image and text -- then we can call it as much as time we need

// import Image from "next/image";

// function OtherProduct(){


//     return(
//         <div>
//             <div>image container</div>
//             <div>text container</div>
//         </div>
//     );
// }

// export default OtherProduct;
import Image from "next/image";

function OtherProduct({ image, text }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
            {/* IMAGE LEFT */}
            <div className="w-28 h-28 relative flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt={text}
                    fill
                    className="object-cover object-center transition-transform duration-300 transform hover:scale-105"
                />
            </div>

            {/* Text vertically centered */}
            <div className="text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors duration-300">
                {text}
            </div>
        </div>
    );
}

export default OtherProduct;
