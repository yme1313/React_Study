import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Editor from "../../components/write/Editor";
import { changeField, initialize } from "../../modules/write";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title : write.title,
    body : write.body
  }));
  const onChaneField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch
  ]);
  useEffect(() => {
    return () => {
      dispatch(initialize());
    }
  }, [dispatch]);
  return <Editor onChaneField={onChaneField} title={title} body={body} />
};

export default EditorContainer;