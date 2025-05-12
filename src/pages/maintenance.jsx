import SettingsIcon from '@mui/icons-material/Settings';

export default function Maintenance() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      {/* Rotating Icon */}
      <div className="animate-spin">
        <SettingsIcon style={{ fontSize: 80, color: "#157EBC" }} />
      </div>

      {/* Maintenance Message */}
      <h1 className="text-3xl font-bold mt-6 text-center sm:text-4xl  ">We’re Under Maintenance</h1>
      <p className="mt-4 text-lg text-gray-600 text-center sm:text-xl">
        Our site is temporarily unavailable. Please check back soon!
      </p>
    </div>
  );
}
