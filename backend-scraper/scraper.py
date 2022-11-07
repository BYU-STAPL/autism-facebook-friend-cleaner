import pickle
from facebook_scraper import get_posts, get_profile
import threadpool


def get_user_info(user):
    info = {
        'profile': get_profile(
            user,
            friends=10,
            cookies='facebook.com_cookies.txt'
        ),
        'posts': get_posts(
            user,
            pages=3,
            cookies='facebook.com_cookies.txt',
            options={
                'allow_extra_requests': False,
                'posts_per_page': 200
            }
        )
    }
    info['posts'] = [post for post in info['posts']]
    return info


def get_user_stats(user, friends_info):
    try:
        profile = get_profile(user, cookies='facebook.com_cookies.txt')
    except:
        print('Ghost account')
        return
    posts = get_posts(
        user,
        pages=5,
        cookies='facebook.com_cookies.txt',
        options={
            'allow_extra_requests': False,
            'posts_per_page': 200
        }
    )
    posts = [post for post in posts]

    stats = {
        'has_about': bool(profile['About']) if 'About' in profile else False,
        'has_basic_info': bool(profile['Basic Info']) if 'Basic Info' in profile else False,
        'has_contact_info': bool(profile['Contact info']) if 'Contact info' in profile else False,
        'has_education': bool(profile['Education']) if 'Education' in profile else False,
        'has_family_members': bool(profile['Family members']) if 'Family members' in profile else False,
        'has_favorite_quotes': bool(profile['Favorite quotes']) if 'Favorite quotes' in profile else False,
        'follower_count': profile['Follower_count'],
        'following_count': profile['Following_count'],
        'friend_count': profile['Friend_count'],
        'has_life_events': bool(profile['Life events']) if 'Life events' in profile else False,
        'has_name': bool(profile['Name']),
        'has_name_pronunciation': bool(profile['Name Pronunciation']) if 'Name Pronunciation' in profile else False,
        'has_other_names': bool(profile['Other names']) if 'Other names' in profile else False,
        'has_places_lived': bool(profile['Places lived']) if 'Places lived' in profile else False,
        'has_relationship': bool(profile['Relationship']) if 'Relationship' in profile else False,
        'has_work': bool(profile['Work']) if 'Work' in profile else False,
        'has_cover_photo': bool(profile['cover_photo']) if 'cover_photo' in profile else False,
        'has_cover_photo_text': bool(profile['cover_photo_text']) if 'cover_photo_text' in profile else False,

        'num_posts': len(posts),
        'avg_num_comments': sum([post['comments'] for post in posts]) / len(posts) if len(posts) > 0 else 0,
        'avg_num_likes': sum([post['likes'] for post in posts]) / len(posts) if len(posts) > 0 else 0,
        'avg_num_links': sum(len(post['links']) for post in posts) / len(posts) if len(posts) > 0 else 0,
        'avg_num_reactions': sum(post['reaction_count'] for post in posts) / len(posts) if len(posts) > 0 else 0,
        'avg_num_shares': sum(post['shares'] for post in posts) / len(posts) if len(posts) > 0 else 0
    }

    friends_info[user] = {
        'profile': profile,
        'posts': posts,
        'stats': stats
    }


if __name__ == '__main__':

    user = 'josh.bedwell.14'
    profile_info = get_profile(
        user,
        friends=True,
        cookies='facebook.com_cookies.txt'
    )

    friends_info = {}
    tp = threadpool.ThreadPool([threadpool.Task(get_user_stats, (str(friend['id']), friends_info)) for friend in profile_info['Friends']], announce=True)
    tp.start()
    tp.join()

    with open('friends_info.pickle', 'w') as f:
        pickle.dump(friends_info, f)
