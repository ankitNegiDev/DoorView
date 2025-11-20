function ReviewCard(props) {
    const { day, month, author, rating, review } = props;

    // Generate stars
    var stars = "";
    for (var i = 0; i < rating; i++) {
        stars += "⭐";
    }

    return (
        <div className="
            flex flex-col md:flex-row 
            bg-white/40 backdrop-blur-lg 
            rounded-3xl 
            shadow-[0_8px_30px_rgba(0,0,0,0.12)]
            border border-white/30
            p-6 gap-6 w-full max-w-2xl mb-6
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]
        ">
            
            {/* LEFT SECTION */}
            <div className="flex flex-col items-center text-center md:min-w-[110px]">
                
                {/* Date Box */}
                <div className="
                    bg-linear-to-br from-yellow-300 to-yellow-500 
                    text-white 
                    rounded-2xl shadow-lg 
                    w-24 h-24 flex flex-col items-center justify-center
                ">
                    <span className="text-3xl font-extrabold leading-none">{day}</span>
                    <span className="text-sm tracking-wide uppercase">{month}</span>
                </div>

                {/* Author */}
                <p className="text-sm text-gray-700 font-semibold mt-3 opacity-90">
                    {author}
                </p>

                {/* Stars */}
                <p className="
                    mt-2 text-lg 
                    bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent
                    font-semibold
                ">
                    {stars}
                </p>
            </div>

            {/* REVIEW TEXT */}
            <div className="flex items-center">
                <p className="
                    text-gray-800 
                    leading-relaxed 
                    text-sm md:text-base 
                    opacity-90 
                    tracking-wide

                ">
                    {review}
                </p>
            </div>

        </div>
    );
}

export default ReviewCard;
