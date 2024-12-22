import React from "react";
import useUser from "../../Hooks/useUser";

const Card = () => {
  const { data, loading, error } = useUser("https://randomuser.me/api/?page=1&results=1&seed=abc");

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500 text-xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 text-xl">
        Error: {error}
      </div>
    );

  const user = data?.results[0];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      {user && (
        <div className="rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 shadow-neumorphic hover:shadow-neumorphic-hover transition-shadow duration-300 p-8 w-full max-w-lg">
          <div className="flex items-center space-x-6">
            {/* User Image */}
            <div className="w-24 h-24 rounded-full bg-cover bg-center shadow-inner" style={{ backgroundImage: `url(${user.picture.large})` }}></div>

            {/* User Info */}
            <div>
              <h1 className="text-xl font-semibold text-gray-800">{user.name.first} {user.name.last}</h1>
              <p className="text-gray-600">Gender: {user.gender}</p>
              <p className="text-gray-600">Phone: {user.phone}</p>
            </div>
          </div>

          {/* Rating Section */}
          <div className="mt-6 flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 fill-current text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
            {[...Array(2)].map((_, i) => (
              <svg
                key={i + 3}
                className="w-6 h-6 fill-current text-gray-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>

          {/* Location Section */}
          <div className="mt-4 text-center">
            <h2 className="text-lg font-medium text-gray-700">Location</h2>
            <p className="text-gray-600">{user.location.city}, {user.location.country}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
