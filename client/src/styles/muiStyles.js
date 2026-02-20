import { makeStyles } from '@material-ui/core/styles';

/* =========================================================
   LAYOUT — App shell, homepage grid
   ========================================================= */
export const useMainPaperStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: theme.palette.background.default,
    },
    homepage: {
      width: '100%',
      maxWidth: 1120,
      margin: '20px auto 0',
      padding: '0 16px 40px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 20,
      boxSizing: 'border-box',
      [theme.breakpoints.down('md')]: {
        maxWidth: 900,
        gap: 16,
        padding: '0 12px 32px',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        padding: '0 0 24px',
        marginTop: 8,
      },
    },
    postsPanel: {
      flex: 1,
      minWidth: 0,
    },
  }),
  { index: 1 }
);

/* =========================================================
   NAVBAR
   ========================================================= */
export const useNavStyles = makeStyles(
  (theme) => ({
    leftPortion: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    },
    logoWrapper: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      fontWeight: 800,
      textTransform: 'none',
      fontSize: '1.05rem',
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap',
      padding: '5px 8px',
      borderRadius: 8,
      color: theme.palette.text.primary,
      '& .MuiButton-startIcon': {
        color: theme.palette.primary.main,
      },
    },
    search: {
      flexGrow: 1,
      maxWidth: 520,
      [theme.breakpoints.down('sm')]: {
        maxWidth: 'none',
        flexGrow: 1,
      },
    },
    searchBtn: {
      borderRadius: 8,
      padding: 7,
      color: theme.palette.text.secondary,
      '&:hover': {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.07)'
          : 'rgba(0,0,0,0.05)',
      },
    },
    navButtons: {
      borderRadius: 8,
      fontWeight: 600,
      color: theme.palette.text.secondary,
      padding: '5px 10px',
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.07)'
          : 'rgba(0,0,0,0.05)',
        color: theme.palette.text.primary,
      },
    },
    user: {
      marginRight: 8,
    },
    titleButton: {
      textTransform: 'none',
      fontSize: '1rem',
      fontWeight: 700,
    },
  }),
  { index: 1 }
);

/* =========================================================
   AUTH FORM
   ========================================================= */
export const useAuthStyles = (authType) =>
  makeStyles(
    (theme) => ({
      authWrapper: {
        display: 'flex',
        flexDirection: authType === 'login' ? 'row' : 'row-reverse',
        minHeight: 400,
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
        },
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '28px 28px 28px',
        flex: 1,
        [theme.breakpoints.down('xs')]: {
          padding: '16px 16px 20px',
        },
      },
      formTitle: {
        textAlign: 'center',
        fontWeight: 800,
        marginBottom: '0.3em',
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.35rem',
        },
      },
      switchText: {
        textAlign: 'center',
        marginBottom: '1.4em',
        color: theme.palette.text.secondary,
        fontSize: '0.84rem',
        [theme.breakpoints.down('xs')]: {
          marginBottom: '0.9em',
        },
      },
      submitButton: {
        marginTop: '1.4em',
        padding: '11px',
        fontWeight: 700,
        fontSize: '0.9rem',
      },
      input: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 4,
      },
      inputIcon: {
        marginRight: 8,
        color: theme.palette.text.secondary,
        marginBottom: 14,
      },
      sidePanel: {
        flex: '0 0 220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '28px 20px 28px',
        background: theme.palette.type === 'dark'
          ? 'linear-gradient(160deg, #1a1f2e 0%, #0d1117 100%)'
          : 'linear-gradient(160deg, #fff5f0 0%, #ffe8d6 100%)',
        borderRadius: authType === 'login' ? '8px 0 0 8px' : '0 8px 8px 0',
        [theme.breakpoints.down('xs')]: {
          display: 'none',
        },
      },
      divider: {
        width: '1px',
        background: theme.palette.divider,
        alignSelf: 'stretch',
      },
    }),
    { index: 1 }
  );

/* =========================================================
   DIALOG (Post form modal + Create Community)
   ========================================================= */
export const useDialogStyles = makeStyles(
  (theme) => ({
    dialogWrapper: {
      padding: 0,
      overflow: 'hidden',
    },
    createPostWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderRadius: 10,
      marginBottom: 10,
      padding: '10px 14px',
      border: `1.5px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      cursor: 'pointer',
      transition: 'border-color 0.15s, box-shadow 0.15s',
      '&:hover': {
        border: `1.5px solid ${theme.palette.primary.main}`,
        boxShadow: theme.palette.type === 'dark'
          ? '0 2px 12px rgba(255,99,20,0.12)'
          : '0 2px 12px rgba(255,99,20,0.08)',
      },
    },
    createBtn: {
      flexGrow: 1,
      textTransform: 'none',
      justifyContent: 'flex-start',
      borderRadius: 8,
      color: theme.palette.text.secondary,
      border: `1.5px solid ${theme.palette.divider}`,
      padding: '8px 14px',
      fontWeight: 400,
      fontSize: '0.9rem',
      '&:hover': {
        background: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.05)'
          : 'rgba(0,0,0,0.03)',
        border: `1.5px solid ${theme.palette.primary.main}`,
        color: theme.palette.text.primary,
      },
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      zIndex: 1100,
      boxShadow: '0 4px 20px rgba(255,99,20,0.45)',
    },
    iconGroup: {
      display: 'flex',
      gap: 4,
    },
    dialogTitle: {
      fontSize: '1.05rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    createSubBtn: {
      marginTop: '0.9em',
    },
    defaultAvatar: {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      fontWeight: 700,
    },
  }),
  { index: 1 }
);

/* =========================================================
   ALERT
   ========================================================= */
export const useAlertStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
      '& > * + *': { marginTop: theme.spacing(2) },
      marginTop: '0.6em',
      marginBottom: '0.6em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   POST LIST
   ========================================================= */
export const usePostListStyles = makeStyles(
  (theme) => ({
    root: {
      width: '100%',
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0 8px',
    },
    loadBtn: {
      minWidth: 160,
      borderRadius: 999,
      fontWeight: 700,
    },
    noSubscribedPosts: {
      textAlign: 'center',
      marginTop: '4em',
      padding: '2em',
      color: theme.palette.text.secondary,
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '4em',
      marginBottom: '3em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   POST CARD (feed list item)
   ========================================================= */
export const useCardStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      borderRadius: 10,
      marginBottom: 8,
      cursor: 'pointer',
      transition: 'border-color 0.15s, box-shadow 0.15s, transform 0.1s',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      overflow: 'hidden',
      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: theme.palette.type === 'dark'
          ? '0 2px 16px rgba(255,99,20,0.18)'
          : '0 2px 12px rgba(255,99,20,0.12)',
      },
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        borderLeft: 'none',
        borderRight: 'none',
        marginBottom: 2,
      },
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 40,
      minWidth: 40,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '10px 0',
      background: theme.palette.type === 'dark'
        ? 'rgba(255,255,255,0.03)'
        : 'rgba(0,0,0,0.025)',
      flexShrink: 0,
    },
    thumbnailWrapper: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px',
      flexShrink: 0,
    },
    thumbnail: {
      width: 72,
      height: 80,
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.type === 'dark'
        ? 'rgba(255,255,255,0.05)'
        : 'rgba(0,0,0,0.05)',
      overflow: 'hidden',
      flexShrink: 0,
      [theme.breakpoints.down('xs')]: {
        width: 56,
        height: 64,
      },
    },
    thumbnailIcon: {
      color: theme.palette.text.disabled,
      fontSize: '1.6rem',
    },
    postInfoWrapper: {
      flex: 1,
      minWidth: 0,
      padding: '10px 14px 8px 6px',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        padding: '8px 10px 6px 4px',
      },
    },
    title: {
      fontWeight: 600,
      fontSize: '0.9375rem',
      lineHeight: 1.45,
      marginBottom: 5,
      color: theme.palette.text.primary,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.875rem',
      },
    },
    userAndDate: {
      marginLeft: 6,
    },
    commentsBtn: {
      textTransform: 'none',
      fontSize: '0.78rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 6,
      padding: '3px 8px',
      minWidth: 0,
      '&:hover': {
        background: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(0,0,0,0.06)',
        color: theme.palette.primary.main,
      },
    },
    bottomBtns: {
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      marginTop: 6,
      flexWrap: 'wrap',
    },
  }),
  { index: 1 }
);

/* =========================================================
   POST FORM (create / edit post)
   ========================================================= */
export const usePostFormStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 24px 24px',
      [theme.breakpoints.down('xs')]: {
        padding: '12px 14px 18px',
      },
    },
    formTitle: {
      textAlign: 'center',
      fontWeight: 800,
      marginBottom: '0.4em',
      letterSpacing: '-0.02em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.3rem',
      },
    },
    submitButton: {
      marginTop: '1.4em',
      padding: '10px',
      fontWeight: 700,
    },
    input: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '0.7em',
    },
    inputIcon: {
      marginRight: 8,
      color: theme.palette.primary.main,
      marginBottom: 14,
    },
    inputIconText: {
      padding: '2px 0 0 0',
      marginRight: 8,
      fontWeight: 700,
      fontSize: '1rem',
      color: theme.palette.primary.main,
    },
    typeBtnGroup: {
      marginBottom: 10,
      borderRadius: 8,
    },
    imageInput: {
      marginTop: '0.9em',
    },
    imageBtnsWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
    },
    imagePreview: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.7em',
      '& img': {
        borderRadius: 8,
        border: `1px solid ${theme.palette.divider}`,
        maxWidth: '100%',
      },
    },
    clearSelectionBtn: {
      padding: '5px',
    },
    selectBtn: {
      textTransform: 'none',
      fontWeight: 600,
    },
    textInput: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: '1em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   POST COMMENTS PAGE (full post view)
   ========================================================= */
export const usePostCommentsStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '1em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 10,
      overflow: 'hidden',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        border: 'none',
        marginTop: 0,
      },
    },
    topPortion: {
      display: 'flex',
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 48,
      minWidth: 48,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 14,
      background: theme.palette.type === 'dark'
        ? 'rgba(255,255,255,0.03)'
        : 'rgba(0,0,0,0.025)',
      [theme.breakpoints.down('xs')]: {
        width: 36,
        minWidth: 36,
      },
    },
    postDetails: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 20px 12px',
      minWidth: 0,
      [theme.breakpoints.down('xs')]: {
        padding: '12px 14px 10px',
      },
    },
    title: {
      fontWeight: 700,
      fontSize: '1.15rem',
      lineHeight: 1.4,
      marginBottom: '0.7em',
      letterSpacing: '-0.01em',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    imagePost: {
      textAlign: 'center',
      margin: '14px 0',
    },
    image: {
      maxWidth: '70%',
      borderRadius: 8,
      border: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('sm')]: { maxWidth: '90%' },
      [theme.breakpoints.down('xs')]: { maxWidth: '100%' },
    },
    bottomBar: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.9em',
      gap: 2,
      flexWrap: 'wrap',
    },
    bottomButton: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      fontSize: '0.8rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 6,
      padding: '5px 9px',
      cursor: 'default',
      '&:hover': {
        background: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.07)'
          : 'rgba(0,0,0,0.05)',
        color: theme.palette.primary.main,
      },
    },
    commentIcon: {
      fontSize: '1rem',
    },
    commentsContainer: {
      padding: '0 16px 20px',
      [theme.breakpoints.down('xs')]: {
        padding: '0 8px 16px',
      },
    },
    divider: {
      margin: '0 0 8px',
    },
    /* ---- Comments --- */
    wholeComment: {
      marginBottom: '2px',
    },
    commentWrapper: {
      display: 'flex',
      borderRadius: 6,
      padding: '2px 0',
      '&:hover': {
        background: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.03)'
          : 'rgba(0,0,0,0.025)',
      },
    },
    commentVotesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 26,
      minWidth: 26,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 10,
      flexShrink: 0,
    },
    commentDetails: {
      display: 'flex',
      flexDirection: 'column',
      padding: '8px 10px 8px 4px',
      width: '100%',
      minWidth: 0,
    },
    replyWrapper: {
      marginLeft: 26,
      borderLeft: `2px solid ${theme.palette.divider}`,
      paddingLeft: 12,
      marginTop: 2,
      marginBottom: 2,
    },
    noCommentsBanner: {
      textAlign: 'center',
      marginTop: '5em',
      padding: '2em',
      color: theme.palette.text.secondary,
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '6em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   COMMENT INPUT
   ========================================================= */
export const useCommentInputStyles = makeStyles(
  (theme) => ({
    wrapper: {
      margin: '10px 0 14px',
      padding: 12,
      borderRadius: 8,
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.type === 'dark'
        ? 'rgba(255,255,255,0.025)'
        : 'rgba(0,0,0,0.02)',
      transition: 'border-color 0.15s',
      '&:focus-within': {
        borderColor: theme.palette.primary.main,
      },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    commentBtn: {
      alignSelf: 'flex-end',
      marginTop: '0.5em',
      borderRadius: 999,
      fontWeight: 700,
      padding: '5px 16px',
      fontSize: '0.8rem',
    },
  }),
  { index: 1 }
);

/* =========================================================
   COMMENT & BUTTONS (edit/reply interaction)
   ========================================================= */
export const useCommentAndBtnsStyles = makeStyles(
  (theme) => ({
    inputDiv: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitBtns: {
      alignSelf: 'flex-end',
      marginTop: '0.3em',
      display: 'flex',
      gap: 4,
    },
    btnStyle: {
      textTransform: 'none',
      fontSize: '0.76rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 6,
      padding: '3px 8px',
      '&:hover': {
        background: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(0,0,0,0.06)',
        color: theme.palette.primary.main,
      },
    },
    btnBar: {
      display: 'flex',
      gap: 2,
      marginTop: 2,
    },
    cancelBtn: {
      marginRight: 2,
    },
  }),
  { index: 1 }
);

/* =========================================================
   USER PAGE
   ========================================================= */
export const useUserPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '1em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 10,
      overflow: 'hidden',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      paddingBottom: '1em',
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        border: 'none',
        marginTop: 0,
      },
    },
    userInfoWrapper: {
      position: 'relative',
      padding: '32px 24px 24px',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 20,
      background: theme.palette.type === 'dark'
        ? 'linear-gradient(165deg, #1e2330 0%, #161b22 60%, transparent 100%)'
        : 'linear-gradient(165deg, #fff5f0 0%, #ffffff 60%)',
      borderBottom: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 16px 20px',
        gap: 12,
      },
    },
    avatarWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0,
    },
    avatar: {
      width: 80,
      height: 80,
      fontSize: '2rem',
      fontWeight: 800,
      border: `3px solid ${theme.palette.primary.main}`,
      boxShadow: '0 4px 20px rgba(255,99,20,0.35)',
      [theme.breakpoints.down('xs')]: {
        width: 64,
        height: 64,
        fontSize: '1.6rem',
      },
    },
    rightWrapper: {
      flexGrow: 1,
      display: 'flex',
      gap: 0,
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
        gap: 8,
      },
    },
    itemWrapper: {
      display: 'flex',
      gap: 28,
      marginTop: 10,
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
        gap: 20,
      },
    },
    twoItemsDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cakeDay: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      color: theme.palette.text.secondary,
      fontSize: '0.8rem',
    },
    postsPaper: {
      margin: '12px 12px 0',
      background: 'transparent',
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0 8px',
    },
    loadBtn: {
      minWidth: 160,
      borderRadius: 999,
      fontWeight: 700,
    },
    noPosts: {
      textAlign: 'center',
      marginTop: '5em',
      padding: '2em',
      color: theme.palette.text.secondary,
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '6em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   USER POST CARD (on user profile page)
   ========================================================= */
export const useUserPostCardStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      display: 'flex',
      marginBottom: 8,
      textDecoration: 'none',
      borderRadius: 10,
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      overflow: 'hidden',
      transition: 'border-color 0.15s, box-shadow 0.15s',
      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: theme.palette.type === 'dark'
          ? '0 2px 14px rgba(255,99,20,0.18)'
          : '0 2px 10px rgba(255,99,20,0.1)',
      },
    },
    votesWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: 40,
      minWidth: 40,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '10px 0',
      background: theme.palette.type === 'dark'
        ? 'rgba(255,255,255,0.03)'
        : 'rgba(0,0,0,0.025)',
      flexShrink: 0,
    },
    title: {
      fontWeight: 600,
      fontSize: '0.9375rem',
      marginBottom: '0.4em',
      lineHeight: 1.45,
      color: theme.palette.text.primary,
    },
    imagePost: {
      textAlign: 'center',
      margin: '8px 0',
    },
    image: {
      width: '35%',
      borderRadius: 6,
      border: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: { width: '50%' },
    },
    postInfo: {
      padding: '10px 14px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      minWidth: 0,
    },
    commentsBtn: {
      marginTop: '0.6em',
      textTransform: 'none',
      fontSize: '0.78rem',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      borderRadius: 6,
      padding: '3px 8px',
      alignSelf: 'flex-start',
      '&:hover': {
        background: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.08)'
          : 'rgba(0,0,0,0.06)',
        color: theme.palette.primary.main,
      },
    },
  }),
  { index: 1 }
);

/* =========================================================
   SUB PAGE (community page)
   ========================================================= */
export const useSubPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '1em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 10,
      overflow: 'hidden',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      paddingBottom: '1em',
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        border: 'none',
        marginTop: 0,
      },
    },
    subInfoWrapper: {
      position: 'relative',
      padding: '24px 24px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      background: theme.palette.type === 'dark'
        ? 'linear-gradient(160deg, #1e2330 0%, #161b22 70%)'
        : 'linear-gradient(160deg, #fff5f0 0%, #ffffff 70%)',
      borderBottom: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        gap: 12,
        padding: '16px 14px 14px',
      },
    },
    firstPanel: {
      flex: 1,
      minWidth: 0,
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8,
    },
    description: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
    },
    secondPanel: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 8,
      flexShrink: 0,
      marginLeft: 16,
      [theme.breakpoints.down('xs')]: {
        alignItems: 'flex-start',
        marginLeft: 0,
      },
    },
    joinBtn: {
      borderRadius: 999,
      fontWeight: 700,
      minWidth: 88,
    },
    inputDiv: {
      display: 'flex',
      flexDirection: 'column',
    },
    submitBtns: {
      alignSelf: 'flex-end',
      marginTop: '0.3em',
      display: 'flex',
      gap: 4,
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0 8px',
    },
    loadBtn: {
      minWidth: 160,
      borderRadius: 999,
      fontWeight: 700,
    },
    noPosts: {
      textAlign: 'center',
      marginTop: '5em',
      padding: '2em',
      color: theme.palette.text.secondary,
    },
    loadSpinner: {
      textAlign: 'center',
      marginTop: '6em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   SORT TAB BAR
   ========================================================= */
export const useSortTabStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      borderRadius: 10,
      marginBottom: 8,
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      padding: '6px 10px',
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        borderLeft: 'none',
        borderRight: 'none',
        marginBottom: 2,
        padding: '4px 6px',
      },
    },
  }),
  { index: 1 }
);

/* =========================================================
   TOP SUBS SIDEBAR PANEL
   ========================================================= */
export const useSubPanelStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      width: 296,
      minWidth: 260,
      maxWidth: 320,
      borderRadius: 10,
      border: `1px solid ${theme.palette.divider}`,
      padding: '16px',
      position: 'sticky',
      top: 72,
      background: theme.palette.background.paper,
      flexShrink: 0,
      [theme.breakpoints.down('md')]: {
        width: 260,
      },
    },
    title: {
      fontWeight: 800,
      fontSize: '0.8rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: theme.palette.text.secondary,
    },
    listPaper: {
      paddingTop: 4,
    },
    listItem: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
    },
    listWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
      borderBottom: `1px solid ${theme.palette.divider}`,
      '&:last-child': {
        borderBottom: 'none',
        paddingBottom: 0,
      },
    },
  }),
  { index: 1 }
);

/* =========================================================
   SUBREDDIT (community) FORM
   ========================================================= */
export const useSubredditFormStyles = makeStyles(
  (theme) => ({
    formWrapper: {
      [theme.breakpoints.down('xs')]: { marginTop: 8 },
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '16px 24px 24px',
      [theme.breakpoints.down('xs')]: {
        padding: '12px 14px 18px',
      },
    },
    formTitle: {
      textAlign: 'center',
      fontWeight: 800,
      marginBottom: '0.4em',
      [theme.breakpoints.down('xs')]: { fontSize: '1.3rem' },
    },
    submitButton: {
      marginTop: '1.4em',
      marginBottom: '0.4em',
      padding: '10px',
      fontWeight: 700,
    },
    input: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '0.6em',
    },
    inputIcon: {
      marginRight: 8,
      color: theme.palette.primary.main,
      marginBottom: 14,
    },
    inputIconText: {
      padding: '2px 0 0 0',
      marginRight: 8,
      fontWeight: 700,
      fontSize: '1rem',
      color: theme.palette.primary.main,
    },
    descInput: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: '1em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   USER MENU (desktop + mobile dropdown)
   ========================================================= */
export const useUserMenuStyles = makeStyles(
  (theme) => ({
    userBtn: {
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 8,
      padding: '4px 10px 4px 6px',
      border: `1px solid ${theme.palette.divider}`,
      gap: 6,
      transition: 'all 0.15s ease',
      '&:hover': {
        backgroundColor: theme.palette.type === 'dark'
          ? 'rgba(255,255,255,0.06)'
          : 'rgba(0,0,0,0.04)',
        borderColor: theme.palette.primary.light,
      },
    },
    avatar: {
      width: 28,
      height: 28,
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      fontSize: '0.8rem',
      fontWeight: 800,
    },
    userBtnMob: {},
    navItems: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
    },
    karmaWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      color: theme.palette.text.secondary,
    },
  }),
  { index: 1 }
);

/* =========================================================
   AVATAR FORM (update avatar)
   ========================================================= */
export const useAvatarFormStyles = makeStyles(
  (theme) => ({
    root: { marginTop: '1em' },
    title: {
      textAlign: 'center',
      fontWeight: 700,
      marginBottom: '0.5em',
    },
    selectBtn: {
      textTransform: 'none',
      fontWeight: 600,
    },
    clearSelectionBtn: { padding: '5px' },
    imageBtnsWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '1em',
      gap: 8,
    },
    imagePreview: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.7em',
      '& img': {
        borderRadius: '50%',
        border: `3px solid ${theme.palette.primary.main}`,
      },
    },
    submitButton: { marginTop: '1.2em' },
    currentAvatar: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.5em',
    },
    currentAvatarText: { marginRight: '0.5em' },
  }),
  { index: 1 }
);

/* =========================================================
   SEARCH PAGE
   ========================================================= */
export const useSearchPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '1em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 10,
      overflow: 'hidden',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      paddingBottom: '1.5em',
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        border: 'none',
        marginTop: 0,
      },
    },
    infoPaper: {
      padding: '14px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderBottom: `1px solid ${theme.palette.divider}`,
      background: theme.palette.type === 'dark'
        ? 'rgba(255,255,255,0.02)'
        : 'rgba(0,0,0,0.02)',
    },
    noResults: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5em',
      padding: '2em',
      gap: 14,
      color: theme.palette.text.secondary,
    },
    sorryIcon: {
      fontSize: '3.5em',
      color: theme.palette.text.disabled,
    },
    loadBtnWrapper: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px 0 8px',
    },
    loadBtn: {
      minWidth: 160,
      borderRadius: 999,
      fontWeight: 700,
    },
  }),
  { index: 1 }
);

/* =========================================================
   SORT COMMENTS
   ========================================================= */
export const useSortCommentsStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 16px',
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: 4,
      gap: 6,
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      color: theme.palette.text.secondary,
      fontSize: '0.82rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  }),
  { index: 1 }
);

/* =========================================================
   404 NOT FOUND
   ========================================================= */
export const useNotFoundPageStyles = makeStyles(
  (theme) => ({
    mainPaper: {
      marginTop: '1em',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 10,
      overflow: 'hidden',
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      paddingBottom: '2em',
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        borderRadius: 0,
        border: 'none',
      },
    },
    textWrapper: {
      marginTop: '15%',
      padding: '2em 2em',
    },
    icon: {
      fontSize: '5em',
      color: theme.palette.primary.main,
      marginBottom: '0.4em',
      opacity: 0.85,
    },
  }),
  { index: 1 }
);
