import {
  query,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firabase";
import { useEffect, useState } from "react";

interface Channels {
  id: string;
  channel: DocumentData;
}

export default function useChannels() {
  const [channels, setChannels] = useState<Channels[]>([]);
  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (querySnapShot) => {
      const channelsResults: Channels[] = [];
      querySnapShot.docs.forEach((doc) => {
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setChannels([...channelsResults]);
    });
  }, []);
  return channels;
}
