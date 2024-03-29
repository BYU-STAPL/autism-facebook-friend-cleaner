from facebook_scraper import get_posts, get_profile


def get_user(user):
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
        ),
        'stats': get_user_stats(user)
    }
    info['posts'] = [post for post in info['posts']]
    return info


def get_avg(items, key):
    if len(items) > 0:
        return sum(filter(None, [key(item) for item in items])) / len(items)
    else:
        return 0


def get_truthy_val(item, key):
    return bool(item[key]) if key in item else False


def get_user_stats(user):
    try:
        profile = get_profile(user, cookies='facebook.com_cookies.txt')
    except:
        print(f'Ghost account: {user}')
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

    return {
        'has_about': get_truthy_val(profile, 'About'),
        'has_basic_info': get_truthy_val(profile, 'Basic Info'),
        'has_contact_info': get_truthy_val(profile, 'Contact info'),
        'has_education': get_truthy_val(profile, 'Education'),
        'has_family_members': get_truthy_val(profile, 'Family members'),
        'has_favorite_quotes': get_truthy_val(profile, 'Favorite quotes'),
        'follower_count': profile['Follower_count'],
        'following_count': profile['Following_count'],
        'friend_count': profile['Friend_count'],
        'has_life_events': get_truthy_val(profile, 'Life events'),
        'has_name': get_truthy_val(profile, 'Name'),
        'has_name_pronunciation': get_truthy_val(profile, 'Name Pronunciation'),
        'has_other_names': get_truthy_val(profile, 'Other names'),
        'has_places_lived': get_truthy_val(profile, 'Places lived'),
        'has_relationship': get_truthy_val(profile, 'Relationship'),
        'has_work': get_truthy_val(profile, 'Work'),
        'has_cover_photo': get_truthy_val(profile, 'cover_photo'),
        'has_cover_photo_text': get_truthy_val(profile, 'cover_photo_text'),

        'num_posts': len(posts),
        'avg_num_comments': get_avg(posts, lambda x: x['comments']),
        'avg_num_likes': get_avg(posts, lambda x: x['likes']),
        'avg_num_links': get_avg(posts, lambda x: len(x['links'])),
        'avg_num_reactions': get_avg(posts, lambda x: x['reaction_count']),
        'avg_num_shares': get_avg(posts, lambda x: x['shares'])
    }


if __name__ == '__main__':

    user = 'ameilya.monson'

    user_info = get_user(user)
    print(user_info)

    user_stats = get_user_stats(user)
    print(user_stats)
