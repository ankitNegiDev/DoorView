function Sidebar() {
    const list = [
        "All Products",
        "Courtyard Gates",
        "HomeGuard Security Screen",
        "Iron Artwork",
        "Iron Doors – Iron Entry Doors – Entry Doors – Wrought Iron Entry Doors",
        "Iron Enclosures",
        "Iron Gates – Wrought Iron Gates – Driveway Gates – Garden Gates – Wood Gates",
        "Iron Railings",
        "Iron Security Doors",
        "Iron Spiral Staircases",
        "Iron Trellises",
        "Iron Window Guards",
        "Other Products",
        "Sunscreens",
    ];

    return (
        <div className="w-full bg-white rounded-lg shadow p-5">
            <ul>
                {list.map(function (item, index) {
                    return (
                        <li key={index} className="py-2 font-semibold text-lg">
                            <button
                                className="
                                    w-full text-left text-gray-700 
                                    hover:text-yellow-600 
                                    transition-all cursor-pointer
                                "
                            >
                                {item}
                            </button>

                            {/* Divider line */}
                            <hr className="border-gray-300 mt-2" />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
