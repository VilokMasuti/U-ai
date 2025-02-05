import { Link } from 'react-router-dom';
import AnimationBars from '../components/AnimationBars';
import Counter from '../components/Counter';
import RichTextEditor from '../components/RichTextEditor';
import UserDataForm from '../components/UserDataForm';

export default function Main() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left Section: Counter + UserDataForm */}
      <div className="space-y-6">
        <Counter />
        <UserDataForm />
      </div>

      {/* Right Section: Rich Text Editor with Dashboard Button */}
      <div className="flex flex-col items-center gap-6">
        <RichTextEditor />
        <Link to="/dashboard">
          <button className="w-full sm:mt-28 md:w-fit cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 ease-in-out shadow-sm">
            Go to Dashboard
          </button>
        </Link>
      </div>

      {/* Animation Bars */}
      <div className="max-sm:hidden max-md:hidden">
        <AnimationBars />
      </div>
    </main>
  );
}
