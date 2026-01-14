import React, { useState } from "react";
import MainComponent from "./MainComponent";

interface UserSettings {
  name: string;
  currentPassword?: string;
  newPassword?: string;
}

const Settings: React.FC = () => {
  const [formData, setFormData] = useState<UserSettings>({
    name: "John Doe",
    currentPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating profile...", formData);
    // Add logic for API call here
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action is permanent."
    );
    if (confirmed) {
      console.log("Deleting account...");
    }
  };

  return (
    <MainComponent>
      <main className="flex-1 p-10 max-w-3xl mx-auto min-h-screen text-white">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <p className="text-gray-400">
            Manage your profile and security preferences
          </p>
        </header>

        {/* Profile & Password Section */}
        <section className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg mb-8">
          <h3 className="mb-6 text-lg font-semibold border-b border-[#333] pb-2">
            General Information
          </h3>

          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Display Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-[#2c2c2c] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Password Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">
                  Current Password
                </label>
                <input
                  name="currentPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-[#2c2c2c] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">New Password</label>
                <input
                  name="newPassword"
                  type="password"
                  placeholder="Leave blank to keep current"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded bg-[#2c2c2c] border border-[#333] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition self-start"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Danger Zone Section */}
        <section className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg border border-red-900/30">
          <h3 className="mb-2 text-lg font-semibold text-red-500">
            Danger Zone
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>

          <button
            onClick={handleDeleteAccount}
            className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-6 rounded transition"
          >
            Delete Account
          </button>
        </section>
      </main>
    </MainComponent>
  );
};

export default Settings;
