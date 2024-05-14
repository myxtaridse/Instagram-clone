import React from "react";
import DetailedCard from "../../components/DetailedCard";
import Loading from "../../components/Loading";

import styles from "./Main.module.scss";

import { getPhotos } from "../../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.isPhotosLoading);
  const total = useSelector((state) => state.photos.totalPhotos);

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    dispatch(getPhotos(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <div className={styles.main}>
      {loading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          dataLength={photos.length}
          next={() => setPage(page + 1)}
          // подгружать еще или нет
          // если длина массива с постами меньше чем общее число постов, то подгружать еще
          hasMore={photos.length < total}
          loader={<Loading />}
          endMessage={<p style={{ textAlign: "center" }}>Пора за работу!</p>}
        >
          {photos.map(({ author, imgUrl, likes, comments, id }) => (
            <DetailedCard
              key={id}
              userName={author.nickname}
              userId={author.id}
              imgUrl={imgUrl}
              likes={likes.length}
              isLikedByYou={true}
              comments={comments}
              avatarUrl={author.avatarUrl}
            />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Main;
