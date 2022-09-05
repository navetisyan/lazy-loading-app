import { useCallback, useRef } from 'react';
import { CSVLink } from 'react-csv';
import Post from './post.component';
import { BtnWrapper } from './user-item.styles';
import html2canvas from 'html2canvas';
import FileSaver from 'file-saver';

const UserItem = ({ user }) => {
  const dataRef = useRef(null);

  const saveData = useCallback(async () => {
    const canvas = await html2canvas(dataRef.current);
    const dataURL = canvas.toDataURL('image/png');
    FileSaver.saveAs(dataURL, `${user.name}.png`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={dataRef}>
        {user.posts.map((post) => {
          return <Post data={post} key={post.id} />;
        })}
      </div>
      <BtnWrapper>
        <CSVLink data={user.posts} filename={`${user.name}.csv`}>
          Export As CSV
        </CSVLink>
        <a className="save-btn" onClick={saveData}>
          Save as Image
        </a>
      </BtnWrapper>
    </>
  );
};

export default UserItem;
