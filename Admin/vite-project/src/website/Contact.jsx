// // src/pages/Contacts.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/contacts'); // ya tumhara GET endpoint
//         setContacts(response.data.data || response.data.contacts || []);
//       } catch (err) {
//         setError('Failed to load contacts');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   if (loading) return <div className="p-8 text-center">Loading contacts...</div>;
//   if (error) return <div className="p-8 text-center text-red-500">{error}</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6 dark:text-white">All Contacts</h1>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
//           <thead className="bg-gray-100 dark:bg-gray-700">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Name</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Email</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Phone</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Subject</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Message</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Date</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
//                   No contacts found
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <tr key={contact._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{contact.name}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{contact.email}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{contact.phone}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{contact.subject}</td>
//                   <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200">{contact.message}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                     {new Date(contact.createdAt).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Contacts;

// src/pages/Contacts.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch all contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/contacts'); // Change to your production URL later
        setContacts(response.data.data || response.data.contacts || []);
      } catch (err) {
        setError('Failed to load contacts');
        console.error(err);
        toast.error('Failed to load contacts');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Delete contact
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact?')) return;

    setDeletingId(id);
    try {
      await axios.delete(`http://localhost:8000/api/contacts/${id}`); // DELETE endpoint
      setContacts(contacts.filter((contact) => contact._id !== id));
      toast.success('Contact deleted successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete contact');
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-400 dark:text-gray-300">
        Loading contacts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">{error}</div>
    );
  }

  return (
    <div className="p-6">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        All Contacts
      </h1>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Subject</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Message</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                >
                  No contacts found
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                    {contact.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    {contact.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    {contact.phone || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    {contact.subject}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-200 max-w-xs truncate">
                    {contact.message}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(contact.createdAt).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      disabled={deletingId === contact._id}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        deletingId === contact._id
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-red-600 hover:bg-red-700 text-white transition'
                      }`}
                    >
                      {deletingId === contact._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
