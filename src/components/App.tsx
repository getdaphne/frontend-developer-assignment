import DaphneLogo from "../assets/daphne-logo.svg";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <img 
            src={DaphneLogo} 
            alt="Daphne" 
            className="h-12 mb-4"
          />
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Email Recipient Management System
          </p>
        </header>
        
        <main className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
              Start Building
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Implement the recipient management system here
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
