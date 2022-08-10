import React, { useEffect, useState } from 'react';

import Axios from 'axios';
import { getUsername } from '../../utils/common';
import style from './style.module.scss';
import { useParams } from 'react-router-dom';

const SingleJournalEntryPage = () => {

  const userName = getUsername();

  const [journal, setJournal] = useState(null);
  const [journalEntry, setJournalEntry] = useState("");

  const { id } = useParams();



  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(`http://localhost:8080/api/${userName}/journals/${id}`);
      setJournal(result.data);
    }

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditEntryUpdate = (e) => {
    e.preventDefault();

    const userEdit = {
      journalDate: JSON.stringify(journal.journalDate),
      journalEntry: journalEntry,
      userName: userName
    };

    Axios.put(`http://localhost:8080/api/${userName}/journals/${id}/edit-journal-entry`, userEdit).then((response) => {
      console.log('Edit successful');
      console.log('DATA', response.data);
    });
  };



  const handleJournalEntryChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setJournalEntry(value);
  };

  console.log('Journal Entry', journalEntry);
  console.log(id);


  return (
    <div className={style.page}>
      <h1>This is the single journal entry page</h1>
      <form className={style.journalForm} onSubmit={handleEditEntryUpdate}>
        <textarea className={style.journalEntry}
          type="text"
          name="journalEntry"
          defaultValue={journal && journal.journalEntry}
          onChange={(e) => handleJournalEntryChange(e)}
        />
        <button className={style.journalSubmit} type="submit">Edit</button>
      </form>
    </div>
  )

}

export default SingleJournalEntryPage;