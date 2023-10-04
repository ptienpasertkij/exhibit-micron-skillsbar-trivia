import { useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "firebase.js";

export const useResetScoreAtMidnight = () => {
  useEffect(() => {
    const resetScore = async () => {
      const scoreRef = doc(db, "score", "current_score");
      try {
        // Set scores on both teams to 0
        await setDoc(
          scoreRef,
          {
            blue_team: 0,
            red_team: 0,
            last_updated: new Date()
          },
          { merge: true }
        );
      } catch (err) {
        console.log("Could not reset score in Firestore");
        console.error(err);
      }
    };

    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      if (hours === 0) {
        resetScore();
      }
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);
};

export const updateScoreFirestore = async (team) => {
  const scoreRef = doc(db, "score", "current_score");
  try {
    // First get current score from Firestore
    const scoreSnap = await getDoc(scoreRef);
    if (scoreSnap.exists()) {
      // Do stuff to score
      await setDoc(
        scoreRef,
        {
          [team]: scoreSnap.data()[team] + 2,
          last_updated: new Date()
        },
        { merge: true }
      );
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (err) {
    console.log("Could not update score in Firestore");
    console.error(err);
  }
};

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key, defaultValue) => {
  return localStorage.getItem(key) || defaultValue;
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

/**
 * Returns a random question from the given array of questions.
 *
 * @param {Array} questionsArray - The array of questions to choose from.
 * @returns {Object} - A randomly selected question from the array.
 */
export const getRandomQuestion = (questionsArray) => {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
};
