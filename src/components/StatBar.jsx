

const StatBar = () => {
    return (
        <div className="grid grid-cols-3 pt-6 mt-8">
            <div className="text-center">
                <p className="text-2xl font-black text-green-600">100+</p>
                <p className="text-xs text-gray-400 uppercase">Animals Listed</p>
            </div>
            <div className="text-center border-x border-gray-100">
                <p className="text-2xl font-black text-green-600">25+</p>
                <p className="text-xs text-gray-400 uppercase">Breeds Available</p>
            </div>
            <div className="text-center">
                <p className="text-2xl font-black text-green-600">100%</p>
                <p className="text-xs text-gray-400 uppercase">Verified Sellers</p>
            </div>
        </div>
    );
};

export default StatBar;