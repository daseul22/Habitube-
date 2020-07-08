import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import TodoBoxContent from './TodoBoxContent';
import ViewVideo from './ViewVideo';
import img2 from '../etc/img/img2.png';
import '../etc/App.css';
import { getvideoList } from '../modules/videolist';
import { getMypage } from '../modules/mypage';
import animeition from '../etc/img/8251-complete.json';
import Lottie from 'react-lottie';

// todobox에서 gettodobox 요청을 또보내야하는지??
// todobox에서 섬네일누르면 모달로 영상재생화면 띄우기
// 영상설정하기 버튼 => 모달로 todoboxContent 띄우기
// isComplete boxes에서 받아서 해야함.
const TodoBox = ({ userinfo, box }) => {
  const { data, doing, error } = useSelector((state) => state.videolist);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [isComplete, setComplete] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [isShowPreview, setShowPreview] = useState(false);
  const [viewContentModal, setViewContentModal] = useState(false);
  const [viewVideoModal, setViewVideoModal] = useState(false);
  const [today, setToday] = useState('');

  function dateFormat() {
    //['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    let day = new Date().getDay();
    let dayTable = ['일', '월', '화', '수', '목', '금', '토', '일'];
    month = '0' + month;
    date = '0' + date;
    let dateString = `${year}-${month.slice(-2)}-${date.slice(-2)} ${
      dayTable[day]
    }`;
    return dateString;
    // '2020-07-01 수'
  }
  useEffect(() => {
    setLoading(true);
    setToday(dateFormat());
    if (box.youtubeInfo) {
      setShowPreview(true);
    }
    setLoading(false);
  }, []);

  const handleContentModal = () => {
    // 패치
    if (!viewContentModal) {
      setLoading(true);
      dispatch(getvideoList());
      setLoading(false);
    }
    setViewContentModal(!viewContentModal);
  };
  const handleVideoModal = () => {
    if (today === box.date) {
      setViewVideoModal(!viewVideoModal);
    }
  };
  const handleComplete = () => {
    setComplete(!isComplete);
  };

  const handleShowPreview = () => {
    setShowPreview(true);
  };
  const handleselectedVideo = (value) => {
    setSelectedVideo(value);
  };

  // boxes 정보가 없으면 div 숨기기
  return (
    <div>
      <Col className="boxes-col">
        <Card className="boxes-col">
          <CardTitle>
            {box.date.slice(8, 10)}일 {box.date.slice(11)}요일
          </CardTitle>
          <Button outline color="secondary" onClick={handleContentModal}>
            영상 설정하기
          </Button>
          {isShowPreview && (
            <TodoBoxPreview
              userinfo={userinfo}
              handleComplete={handleComplete}
              handleVideoModal={handleVideoModal}
              selectedVideo={selectedVideo}
              box={box}
              today={today}
              checkbtn={isComplete}
            />
          )}
        </Card>
      </Col>
      {viewContentModal && (
        <TodoBoxContent
          handleModal={handleContentModal}
          id={userinfo.id}
          handleShowPreview={handleShowPreview}
          handleselectedVideo={handleselectedVideo}
          date={box.date}
        />
      )}
      {viewVideoModal ? (
        <ViewVideo
          handleModal={handleVideoModal}
          selectedVideo={selectedVideo}
          id={userinfo.id}
          date={box.date}
          youtube={box.youtubeInfo}
        />
      ) : null}
    </div>
  );
};
export default TodoBox;

//selectedVideo에서 정보 받아와 이미지, 메모 렌더
const TodoBoxPreview = ({
  selectedVideo,
  userinfo,
  handleComplete,
  handleVideoModal,
  box,
  today,
  checkbtn,
}) => {
  const dispatch = useDispatch();
  console.log(box.youtubeInfo.snippet);
  const [completIcon, setCompletIcon] = useState(false);
  const handleCompletIcon = () => {
    setCompletIcon(true);
    setTimeout(setCompletIcon(false), 2000);
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animeition,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="preview">
      {today === box.date ? null : (
        <div className="preview-cover">{box.date.slice(8, 10)}일에 만나요!</div>
      )}
      {box.isComplete && (
        <div className="complet-ani">
          <Lottie options={defaultOptions} />
        </div>
      )}
      <Button
        color="success"
        onClick={(e) => {
          axios
            .post(
              'http://localhost:3000/mypage/todaycomplete',
              {
                id: userinfo.id,
                isComplete: !box.isComplete,
              },
              { withCredentials: true },
            )
            .then((result) => {
              console.log(result);
              dispatch(getMypage());
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        check
      </Button>
      <Media
        width="100%"
        object
        src={box.youtubeInfo.snippet.thumbnails.medium.url}
        alt="썸네일"
        onClick={handleVideoModal}
      />
      <CardText>{box.memoTitle}</CardText>
    </div>
  );
};
